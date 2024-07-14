import { MenuMobileContainer, Header, Main } from './styles'
import { CustomLink } from '../CustomLink'
import { InputWithIcon } from '../InputWithIcon'
import { Footer } from '../Footer'
import { MagnifyingGlass, X } from 'phosphor-react'
import { useMenu } from '../../hooks/MenuContext'
import { useAuth } from '../../hooks/AuthContext'

export function MenuMobile() {
  const { user, logout } = useAuth()
  const { statusMobileMenu } = useMenu()

  function handleCloseMenu() {
    statusMobileMenu(false)
  }

  function handleLogout() {
    logout()
  }

  return (
    <MenuMobileContainer>
      <Header>
        <X onClick={handleCloseMenu} />
        <span>Menu</span>
      </Header>
      <Main>
        <InputWithIcon
          name="searchInput"
          placeholder="Busque por pratos ou ingredientes"
          icon={<MagnifyingGlass />}
        />
        <nav>
          <ul>
            <li onClick={handleCloseMenu}>
              <CustomLink to="/" text="Inicio" />
            </li>
            {user && user.isAdmin ? (
              <li onClick={handleCloseMenu}>
                <CustomLink to="/admin/newPlate" text="Novo prato" />
              </li>
            ) : null}
            <li onClick={handleLogout}>
              <CustomLink text="Sair" />
            </li>
          </ul>
        </nav>
      </Main>
      <Footer />
    </MenuMobileContainer>
  )
}
