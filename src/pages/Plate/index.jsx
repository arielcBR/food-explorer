import { useEffect, useState } from 'react'
import {
  PlateContainer,
  PlateDetails,
  IngredientTagsWrapper,
  PlateFooter,
} from './styles'
import { Receipt } from 'phosphor-react'
import { CustomLink } from '../../components/CustomLink'
import { IngredientTag } from './components/IngredientTag'
import { Button } from '../../components/Button'
import { QuantityInput } from '../../components/QuantityInput'
import { useAuth } from '../../hooks/AuthContext'
import { useCart } from '../../hooks/CartContext'
import { getDish } from '../../services/api'
import { useParams } from 'react-router-dom'
import { notification } from '../../utils/Notification'

export function Plate() {
  const { dishId } = useParams()
  const [dish, setDish] = useState({})
  const [quantity, setQuantity] = useState(1)
  const { user } = useAuth()
  const { addItemToCart } = useCart()
  const isAdmin = user ? user.isAdmin : false

  async function getDishDetails() {
    const response = await getDish(dishId)
    setDish(response)
  }

  function handleIncrement() {
    setQuantity((prev) => prev + 1)
  }

  function handleDecrement() {
    setQuantity((prev) => prev - 1)
  }

  function handleAddInCart() {
    const dishToAdd = { ...dish, quantity }
    addItemToCart(dishToAdd)
    notification.success('Item adicionado ao carrinho!')
  }

  useEffect(() => {
    getDishDetails()
  })

  return (
    <PlateContainer>
      <CustomLink to="/" icon="true" text="voltar" />
      <main>
        <img src={dish.picture} alt="" />

        <div>
          <PlateDetails>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <IngredientTagsWrapper>
              {dish.ingredients &&
                dish.ingredients.map((ingredient) => (
                  <IngredientTag key={ingredient.id} text={ingredient.name} />
                ))}
            </IngredientTagsWrapper>
          </PlateDetails>
          <PlateFooter>
            {isAdmin ? (
              <Button to={`/admin/editPlate/${dishId}`} text="Editar prato" />
            ) : (
              <div>
                <QuantityInput
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  quantity={quantity}
                />
                <Button
                  icon={<Receipt />}
                  text={`Pedir - R$${dish.price * quantity}`}
                  onClick={handleAddInCart}
                />
              </div>
            )}
          </PlateFooter>
        </div>
      </main>
    </PlateContainer>
  )
}
