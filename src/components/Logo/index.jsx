import { LogoContainer } from './styles'
import logoHeader from '../../assets/logo.svg'
import logoFooter from '../../assets/logo-footer.svg'

export function Logo({ variant = 'header' }) {
  const isAdmin = true

  return (
    <LogoContainer to="/" variant={variant}>
      <img
        src={variant === 'header' ? logoHeader : logoFooter}
        alt="Logo poligono"
      />
      <span>food explorer</span>
      {isAdmin && variant === 'header' && <p>admin</p>}
    </LogoContainer>
  )
}
