import { Label } from '../Label'
import { TextareaWrapper, TextareaStyled } from './styles'

export function Textarea({ placeholder, name, labelText, ...rest }) {
  const id = name

  return (
    <TextareaWrapper>
      <Label text={labelText} htmlFor={id} />
      <TextareaStyled placeholder={placeholder} id={id} name={name} {...rest} />
    </TextareaWrapper>
  )
}
