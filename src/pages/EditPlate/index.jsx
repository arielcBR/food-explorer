import { NewPlateContainer } from '../NewPlate/styles'
import { ButtonsWrapper } from './styles'
import { CustomLink } from '../../components/CustomLink'
import { Form } from '../../components/Form'
import { Button } from '../../components/Button'

export function EditPlate() {
  return (
    <NewPlateContainer>
      <CustomLink to="/" text="voltar" icon="true" />
      <h2>Editar prato</h2>
      <Form id="plateForm" />
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
