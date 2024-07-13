import { NewPlateContainer } from './styles'
import { CustomLink } from '../../components/CustomLink'
import { Form } from '../../components/Form'
import { Button } from '../../components/Button'
import { useState } from 'react'

export function NewPlate() {
  const [enable, setEnable] = useState(false)

  function setButtonEnable(state) {
    setEnable(state)
  }

  return (
    <NewPlateContainer>
      <CustomLink to="/" text="voltar" icon="true" />
      <h2>Novo prato</h2>
      <Form id="plateForm" page="create" setButtonEnable={setButtonEnable} />
      <Button
        as="button"
        form="plateForm"
        type="submit"
        text="Salvar alterações"
        disabled={enable}
      />
    </NewPlateContainer>
  )
}
