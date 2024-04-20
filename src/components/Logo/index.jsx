import { LogoContainer } from './styles'
import logoImage from '../../assets/logo.svg'

export function Logo() {
  return (
    <LogoContainer to="/">
      <img src={logoImage} alt="Logo poligono de cor azul" />
      <span>food Explorer</span>
    </LogoContainer>
  )
}
