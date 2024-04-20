import { ButtonContainer } from './styles'

export function Button({ text, icon, ...rest }) {
  return (
    <ButtonContainer {...rest}>
      {icon && icon}
      {text}
    </ButtonContainer>
  )
}
