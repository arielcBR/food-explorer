import {
  HeaderContainer,
  HeaderContentMobile,
  HeaderContentDesktop,
  OrderWrapper,
  AmountOfOrders,
} from './styles'
import { Logo } from '../../components/Logo'
import { Receipt, List, MagnifyingGlass, SignOut } from 'phosphor-react'
import { InputWithIcon } from '../InputWithIcon'
import { Button } from '../Button'
import { useMenu } from '../../context/MenuContext'
import { useAuth } from '../../hooks/AuthContext'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const isAdmin = user ? user.isAdmin : false
  const { statusMobileMenu } = useMenu()

  function handleOpenMenu() {
    statusMobileMenu(true)
  }

  function handleLogout() {
    logout()
    navigate('/')
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
        <Button
          text={isAdmin ? 'Novo prato' : 'Pedidos (0)'}
          icon={!isAdmin ? <Receipt /> : null}
          to={isAdmin ? '/admin/newPlate' : '/cart'}
        />

        <SignOut onClick={handleLogout} />
      </HeaderContentDesktop>
    </HeaderContainer>
  )
}
