import { LogoContainer } from './styles'
import logoImage from '../../assets/logo.svg'

export function Logo({ variant = 'header' }) {
  return (
    <LogoContainer to="/" variant={variant}>
      <img src={logoImage} alt="Logo poligono de cor azul" />
      <span>food explorer</span>
    </LogoContainer>
  )
}
