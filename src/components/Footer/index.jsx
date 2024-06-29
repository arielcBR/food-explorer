import { FooterContainer, LogoFooter } from './styles'
import logoFooter from '../../assets/logo-footer.svg'

export function Footer() {
  return (
    <FooterContainer className="container">
      <div>
        <LogoFooter>
          <img src={logoFooter} alt="" />
          <span>Food explorer</span>
        </LogoFooter>
        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </FooterContainer>
  )
}
