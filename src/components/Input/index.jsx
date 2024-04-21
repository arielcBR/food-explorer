import { Label } from '../Label'
import { InputWrapper, InputStyled } from './styles'

export function Input({
  placeholder,
  name,
  labelText,
  type = 'text',
  ...rest
}) {
  const id = name

  return (
    <InputWrapper>
      <Label text={labelText} htmlFor={id} />
      <InputStyled
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        {...rest}
      />
    </InputWrapper>
  )
}
