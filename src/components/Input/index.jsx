import { Label } from '../Label'
import { InputWrapper, InputStyled, ErrorMessage } from './styles'

export function Input({
  placeholder,
  name,
  labelText,
  type = 'text',
  errorMessage,
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
        errorMessage={errorMessage && true}
        {...rest}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputWrapper>
  )
}
