import { LogoContainer } from './styles'
import logoImage from '../../assets/logo.svg'

export function Logo({ size = 'sm' }) {
  return (
    <LogoContainer to="/" size={size}>
      <img src={logoImage} alt="Logo poligono de cor azul" />
      <span>food Explorer</span>
    </LogoContainer>
  )
}
