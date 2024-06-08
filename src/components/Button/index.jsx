import { ButtonContainer } from './styles'

export function Button({ text, icon, variant = 'large', ...rest }) {
  return (
    <ButtonContainer size={variant} {...rest}>
      {icon && icon}
      {text}
    </ButtonContainer>
  )
}
