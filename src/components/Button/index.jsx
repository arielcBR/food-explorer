import { ButtonContainer } from './styles'

export function Button({ text, icon, size = 'sm', ...rest }) {
  return (
    <ButtonContainer size={size} {...rest}>
      {icon && icon}
      {text}
    </ButtonContainer>
  )
}
