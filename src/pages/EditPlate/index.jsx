import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NewPlateContainer } from '../NewPlate/styles'
import { ButtonsWrapper } from './styles'
import { CustomLink } from '../../components/CustomLink'
import { Form } from '../../components/Form'
import { Button } from '../../components/Button'
import { getDish } from '../../services/api'

export function EditPlate() {
  const { dishId } = useParams()
  const [dish, setDish] = useState({})

  async function getDishDetails() {
    const response = await getDish(dishId)
    setDish(response)
  }
    
  useEffect(() => {
    getDishDetails()
  },[])


  return (
    <NewPlateContainer>
      <CustomLink to="/" text="voltar" icon="true" />
      <h2>Editar prato</h2>
      <Form id="plateForm" dish={dish} />
      <ButtonsWrapper>
        <Button 
          as="button"
          className="deleteButton"
          variant="normal" 
          text="Excluir prato"  
        />
        <Button
          as="button"
          variant="normal"
          form="plateForm"
          type="submit"
          text="Salvar alterações"
        />
      </ButtonsWrapper>
    </NewPlateContainer>
  )
}
