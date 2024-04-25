import { FooterContainer } from './styles'
import { Logo } from '../../components/Logo'

export function Footer() {
  return (
    <FooterContainer className="container">
      <Logo variant="footer" />
      <span>© 2023 - Todos os direitos reservados.</span>
    </FooterContainer>
  )
}
