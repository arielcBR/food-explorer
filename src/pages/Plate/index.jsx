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
import { getDish, getDishIngredients } from '../../services/api'
import { useParams } from 'react-router-dom'

export function Plate() {
  const { dishId } = useParams()
  const [ingredientList, setIngredientList] = useState([])
  const [dish, setDish] = useState({})
  const { user } = useAuth()
  const isAdmin = user ? user.isAdmin : false

  const ingredients = [{id: 1, name: 'tomate'}, {id: 2, name: 'cebola'}, {id: 3, name: 'queijo'}, {id: 4, name: 'massa'}]
  
  async function getDishDetails() {
    const response = await getDish(dishId)
    setDish(response)
  }
    
  // async function getIngredients() {
  //   const result = getDishIngredients()
  //   setIngredientList(result)
  // }

  useEffect(() => {
    getDishDetails()
    // getIngredients()
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
              {ingredients.map(tag => <IngredientTag key={tag.id} text={tag.name} />)}
            </IngredientTagsWrapper>
          </PlateDetails>
          <PlateFooter>
            {isAdmin 
              ? <Button as="button" text="Editar prato" />
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
