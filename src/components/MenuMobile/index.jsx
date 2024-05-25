import { MenuMobileContainer, Header, Main } from './styles'
import { CustomLink } from '../CustomLink'
import { InputWithIcon } from '../InputWithIcon'
import { Footer } from '../Footer'
import { MagnifyingGlass, X } from 'phosphor-react'
import { useMenu } from '../../context/MenuContext'
import { useAuth } from '../../hooks/AuthContext'

export function MenuMobile() {
  const { user, logout } = useAuth()
  const { setMenuVisible } = useMenu()

  function handleCloseMenu() {
    setMenuVisible(false)
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
            {user.isAdmin && (
              <li>
                <CustomLink to="#" text="Novo prato" />
              </li>
            )}
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
