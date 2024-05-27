import {
  HeaderContainer,
  HeaderContentMobile,
  HeaderContentDesktop,
  SignOutWrapper,
  OrderWrapper,
  AmountOfOrders,
} from './styles'
import { Logo } from '../../components/Logo'
import { Receipt, List, MagnifyingGlass, SignOut } from 'phosphor-react'
import { InputWithIcon } from '../InputWithIcon'
import { Button } from '../Button'
import { useMenu } from '../../context/MenuContext'
import { useAuth } from '../../hooks/AuthContext'

export function Header() {
  const { user, logout } = useAuth()
  const isAdmin = user ? user.isAdmin : false
  const { statusMobileMenu } = useMenu()

  function handleOpenMenu() {
    statusMobileMenu(true)
  }

  function handleLogout() {
    logout()
  }

  return (
    <HeaderContainer className="container">
      <HeaderContentMobile>
        <List size={32} onClick={handleOpenMenu} />
        <Logo />
        {!isAdmin && (
          <OrderWrapper>
            <Receipt size={32} />
            <AmountOfOrders>5</AmountOfOrders>
          </OrderWrapper>
        )}
      </HeaderContentMobile>

      <HeaderContentDesktop>
        <Logo />
        <InputWithIcon
          placeholder="Busque por pratos ou ingredientes"
          icon={<MagnifyingGlass size={32} />}
        />
        {isAdmin && <Button text="Novo prato" />}
        {!isAdmin && <Button icon={<Receipt size={32} />} text="Pedidos (0)" />}

        <SignOutWrapper onClick={handleLogout}>
          <SignOut />
        </SignOutWrapper>
      </HeaderContentDesktop>
    </HeaderContainer>
  )
}
