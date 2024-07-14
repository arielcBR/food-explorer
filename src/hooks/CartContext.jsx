import { createContext, useEffect, useState, useContext } from 'react'
import { produce } from 'immer'

const CartContext = createContext({})

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('@foodexplorer:cart')

    if(storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })
  const cartQuantity = cartItems.length

  const cartItemsPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  function addItemToCart(dish) {
    const dishAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === dish.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (dishAlreadyExistsInCart < 0) {
        draft.push(dish)
      } else {
        draft[dishAlreadyExistsInCart].quantity += dish.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeItemQuantityInCart(cartItemId, type) {
    const newCart = produce(cartItems, (draft) => {
      const itemExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (itemExistsInCart >= 0) {
        const item = draft[itemExistsInCart]

        if (type === 'decrease') {
          if (item.quantity > 1) {
            draft[itemExistsInCart].quantity = item.quantity - 1
          }
        } else {
          draft[itemExistsInCart].quantity = item.quantity + 1
        }
      }
    })

    setCartItems(newCart)
  }

  function deleteItemInCart(cartItemId) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (item) => item.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) draft.splice(coffeeExistsInCart, 1)
    })
    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem('@foodexplorer:cart', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        cartQuantity,
        changeItemQuantityInCart,
        deleteItemInCart,
        cartItemsPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}