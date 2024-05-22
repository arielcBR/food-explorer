import { LogoLink, LogoContainer } from './styles'
import logoHeader from '../../assets/logo.svg'

export function Logo() {
  const isAdmin = false

  return (
    <LogoLink to="/">
      <LogoContainer>
        <img src={logoHeader} alt="Logo poligono" />
        <span>food explorer</span>
        {isAdmin && <p>admin</p>}
      </LogoContainer>
    </LogoLink>
  )
}
