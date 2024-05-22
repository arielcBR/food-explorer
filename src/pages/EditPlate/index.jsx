import { NewPlateContainer, ButtonsWrapper } from '../NewPlate/styles'
import { CustomLink } from '../../components/CustomLink'
import { Form } from '../../components/Form'
import { Button } from '../../components/Button'

export function EditPlate() {
  return (
    <NewPlateContainer>
      <CustomLink to="#" text="voltar" icon="true" />
      <h2>Editar prato</h2>
      <Form id="plateForm" />
      <ButtonsWrapper>
        <Button text="Excluir prato" />
        <Button form="plateForm" type="submit" text="Salvar alterações" />
      </ButtonsWrapper>
    </NewPlateContainer>
  )
}
