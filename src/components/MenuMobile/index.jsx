import { MenuMobileContainer, Header, Main } from './styles'
import { CustomLink } from '../CustomLink'
import { InputWithIcon } from '../InputWithIcon'
import { Footer } from '../Footer'
import { MagnifyingGlass, X } from 'phosphor-react'

export function MenuMobile() {
  return (
    <MenuMobileContainer>
      <Header>
        <X />
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
            <li>
              <CustomLink text="Sair" />
            </li>
          </ul>
        </nav>
      </Main>
      <Footer />
    </MenuMobileContainer>
  )
}
