import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NewPlateContainer } from '../NewPlate/styles'
import { ButtonsWrapper } from './styles'
import { CustomLink } from '../../components/CustomLink'
import { Form } from '../../components/Form'
import { Button } from '../../components/Button'
import { getDish, deleteDish } from '../../services/api'
import { notification } from '../../utils/Notification'

export function EditPlate() {
  const navigate = useNavigate()
  const { dishId } = useParams()
  const [dish, setDish] = useState({})
  const [enable, setEnable] = useState(false)

  async function getDishDetails() {
    const response = await getDish(dishId)
    setDish(response)
  }

  async function handleDeleteDish() {
    const readyToDelete = confirm('Tem certeza que quer deletar?')

    if (readyToDelete) {
      const response = await deleteDish(dishId)

      if (response.status === 200) {
        notification.success('Prato/Drink deletado com sucesso!')
        navigate('/')
      } else notification.error('Erro ao eliminar o item')
    }
  }

  function setButtonEnable(state) {
    setEnable(state)
  }

  useEffect(() => {
    getDishDetails()
  }, [])

  return (
    <NewPlateContainer>
      <CustomLink to="/" text="voltar" icon="true" />
      <h2>Editar prato</h2>
      <Form
        id="plateForm"
        dish={dish}
        page="update"
        setButtonEnable={setButtonEnable}
      />
      <ButtonsWrapper>
        <Button
          as="button"
          className="deleteButton"
          variant="normal"
          text="Excluir prato"
          onClick={handleDeleteDish}
        />
        <Button
          as="button"
          variant="normal"
          form="plateForm"
          type="submit"
          text="Salvar alterações"
          disabled={enable}
        />
      </ButtonsWrapper>
    </NewPlateContainer>
  )
}
