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
import { getDish } from '../../services/api'
import { useParams } from 'react-router-dom'

export function Plate() {
  const { dishId } = useParams()
  const [dish, setDish] = useState({})
  const { user } = useAuth()
  const isAdmin = user ? user.isAdmin : false

  async function getDishDetails() {
    const response = await getDish(dishId)
    setDish(response)
  }
    
  useEffect(() => {
    getDishDetails()
  },[])

  return (
    <PlateContainer>
      <CustomLink to='/' icon="true" text="voltar" />
      <main>
        <img src={dish.picture} alt="" />

        <div>
          <PlateDetails>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <IngredientTagsWrapper>
              {dish.ingredients && dish.ingredients.map(ingredient => (
                <IngredientTag key={ingredient.id} text={ingredient.name} />
              ))}
            </IngredientTagsWrapper>
          </PlateDetails>
          <PlateFooter>
            {isAdmin 
              ? <Button to={`/admin/editPlate/${dishId}`} text="Editar prato" />
              : (
              <div>
                <QuantityInput />
                <Button icon={<Receipt />} text={`Pedir - R$${dish.price}`} />
              </div>
            )}
          </PlateFooter>
        </div>
      </main>
    </PlateContainer>
  )
}
