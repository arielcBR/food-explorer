import { LogoContainer, ImageLogo, TextLogo } from './styles'
import logoHeader from '../../assets/logo.svg'
import { useAuth } from '../../hooks/AuthContext'

export function Logo() {
  const { user } = useAuth()
  const isAdmin = user ? user.isAdmin : false

  return (
    <LogoContainer to="/">
      <div>
        <ImageLogo src={logoHeader} alt="Logo poligono" />
        <TextLogo>food explorer</TextLogo>
      </div>
      {isAdmin ? <p>admin</p> : <p></p>}
    </LogoContainer>
  )
}
