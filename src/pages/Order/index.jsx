import { SearchContainer, MyOrder, Payment, CardItem } from './styles'
import { MethodOfPayment } from './components/MethodOfPayment'
import { Trash } from 'phosphor-react'
import { Button } from '../../components/Button'
import { formatter } from '../../utils/Formatter'
import { useEffect, useState } from 'react'
import { getDishPicture } from '../../services/api'
import { useCart } from '../../hooks/CartContext'

export function Order() {
  const { cartItems, cartItemsPrice, deleteItemInCart } = useCart()
  const [dishes, setDishes] = useState([])
  const disableButton = !cartItems.length

  function handleDeleteItem(id) {
    deleteItemInCart(id)
  }

  useEffect(() => {
    async function fetchPictures() {
      if (cartItems && cartItems.length) {
        const cartItemsWithPictures = await Promise.all(
          cartItems.map(async (item) => {
            const picture = await getDishPicture(item.picture)
            return { ...item, picture }
          }),
        )
        setDishes(cartItemsWithPictures)
      } else {
        setDishes([])
      }
    }

    fetchPictures()
  }, [cartItems])

  return (
    <SearchContainer>
      <main>
        <MyOrder>
          <h2>Meu pedido</h2>
          {dishes && dishes.length ? (
            <ul>
              {dishes.map((item) => (
                <li key={item.id}>
                  <CardItem>
                    <Trash onClick={() => handleDeleteItem(item.id)} />
                    <img src={item.picture} alt="" />
                    <div>
                      <h4>{item.name}</h4>
                      <div>
                        <span>{item.quantity}x</span>
                        <span>{formatter.currency(item.price)}</span>
                      </div>
                    </div>
                  </CardItem>
                </li>
              ))}
            </ul>
          ) : null}
          <h3>Total: {formatter.currency(cartItemsPrice)}</h3>
        </MyOrder>

        <Payment>
          <h2>Pagamento</h2>
          <MethodOfPayment />
        </Payment>
      </main>
      <Button as="button" disabled={disableButton} text="Avançar" />
    </SearchContainer>
  )
}
