import { CustomLinkContainer } from './styles'
import { CaretLeft } from 'phosphor-react'

export function CustomLink({ text, icon = false, ...rest }) {
  return (
    <CustomLinkContainer icon={icon} {...rest}>
      {icon && <CaretLeft />}
      {text}
    </CustomLinkContainer>
  )
}
