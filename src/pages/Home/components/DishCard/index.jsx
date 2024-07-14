import { Link } from 'react-router-dom'
import { getDishPicture } from '../../../../services/api'
import { useEffect, useState } from 'react'
import { Heart, PencilSimple } from 'phosphor-react'
import {
  DishCardContainer,
  DishName,
  DishImage,
  DishPrice,
  DishDescription,
  IconWrapper,
  IncludeDishWrapper,
} from './styles'
import { Button } from '../../../../components/Button'
import { QuantityInput } from '../../../../components/QuantityInput'
import { formatter } from '../../../../utils/Formatter'
import { useAuth } from '../../../../hooks/AuthContext'
import { useDishes } from '../../../../hooks/DishesContext'
import { useCart } from '../../../../hooks/CartContext'

export function DishCard({ dish }) {
  const { user } = useAuth()
  const { favoriteDishes, toggleFavoriteDish } = useDishes()
  const { addItemToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [img, setImg] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)
  const isAdmin = user ? user.isAdmin : false

  const { id, name, description, price, picture } = dish
  const priceFormatted = formatter.currency(price)

  async function getPicture() {
    const image = await getDishPicture(picture)
    setImg(image)
  }

  async function fetchFavorite() {
    if (favoriteDishes) {
      const isDishInFavoriteList = favoriteDishes.find(
        (item) => item.dish_id === id,
      )

      if (isDishInFavoriteList) setIsFavorite(true)
      else setIsFavorite(false)
    }
  }

  async function toggleFavoriteState() {
    toggleFavoriteDish(id)
  }

  function handleIncrement() {
    setQuantity((prev) => prev + 1)
  }

  function handleDecrement() {
    setQuantity((prev) => prev - 1)
  }

  function handleAddToCart() {
    const itemToAdd = { ...dish, quantity }
    addItemToCart(itemToAdd)
  }

  useEffect(() => {
    getPicture()
    fetchFavorite()
  }, [favoriteDishes])

  return (
    <DishCardContainer>
      {isAdmin ? (
        <IconWrapper to={`/admin/editPlate/${id}`}>
          <PencilSimple />
        </IconWrapper>
      ) : (
        <IconWrapper onClick={toggleFavoriteState}>
          <Heart
            weight={isFavorite ? 'fill' : 'regular'}
            className={isFavorite ? 'favorite' : ''}
          />
        </IconWrapper>
      )}

      <Link to={`/plate/${id}`}>
        <DishImage src={img} />
      </Link>
      <DishName>{name}</DishName>
      <DishDescription>{description}'</DishDescription>
      <DishPrice>{priceFormatted}</DishPrice>

      {!isAdmin && (
        <IncludeDishWrapper>
          <QuantityInput
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            quantity={quantity}
          />
          <Button variant="medium" text="Incluir" onClick={handleAddToCart} />
        </IncludeDishWrapper>
      )}
    </DishCardContainer>
  )
}
