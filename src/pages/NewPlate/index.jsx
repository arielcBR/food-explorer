import { NewPlateContainer } from './styles'
import { CustomLink } from '../../components/CustomLink'
import { Form } from '../../components/Form'
import { Button } from '../../components/Button'

export function NewPlate() {
  return (
    <NewPlateContainer>
      <CustomLink to="/" text="voltar" icon="true" />
      <h2>Novo prato</h2>
      <Form id="plateForm" page="create" />
      <Button
        as="button"
        form="plateForm"
        type="submit"
        text="Salvar alterações"
      />
    </NewPlateContainer>
  )
}
