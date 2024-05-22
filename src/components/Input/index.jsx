import { InputWrapper, InputStyled } from './styles'

export function Input({ placeholder, name, type = 'text', ...rest }) {
  const id = name

  return (
    <InputWrapper>
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
