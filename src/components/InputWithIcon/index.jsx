import { InputWrapper, InputStyled } from './styles'

export function InputWithIcon({
  icon,
  placeholder,
  name,
  type = 'text',
  ...rest
}) {
  const id = name

  return (
    <InputWrapper>
      <div>{icon}</div>
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
