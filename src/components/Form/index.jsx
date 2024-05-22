import { FormContainer, InputWrapper } from './styles'

import { Input } from '../Input'
import { Select } from '../Select'
import { Textarea } from '../Textarea'
import { TagsWrapper } from '../TagsWrapper'
import { Label } from '../Label'
import { FileInput } from '../FIleInput'

export function Form({ plateForm }) {
  return (
    <FormContainer id={plateForm}>
      <InputWrapper>
        <Label text="Imagem do prato" htmlFor="imagePlate" />
        <FileInput name="imagePlate" text="Selecione imagem" />
      </InputWrapper>

      <InputWrapper>
        <Label text="Nome" htmlFor="name" />
        <Input name="name" placeholder="Ex.: Salada Ceasar" />
      </InputWrapper>

      <InputWrapper>
        <Label text="Categoria" htmlFor="category" />
        <Select />
      </InputWrapper>

      <InputWrapper>
        <Label text="Ingredientes" htmlFor="ingredients" />
        <TagsWrapper />
      </InputWrapper>

      <InputWrapper>
        <Label text="Preço" htmlFor="price" />
        <Input type="number" name="price" placeholder="R$ 00,00" />
      </InputWrapper>

      <InputWrapper>
        <Label text="Descrição" htmlFor="description" />
        <Textarea
          name="description"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        />
      </InputWrapper>
    </FormContainer>
  )
}
