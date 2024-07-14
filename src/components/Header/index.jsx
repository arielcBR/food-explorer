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
import { useMenu } from '../../hooks/MenuContext'
import { useAuth } from '../../hooks/AuthContext'
import { useCart } from '../../hooks/CartContext'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {
  const { user, logout } = useAuth()
  const { statusMobileMenu } = useMenu()
  const { cartQuantity } = useCart()
  const navigate = useNavigate()
  const isAdmin = user ? user.isAdmin : false

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
            <Link to={'/order'} >
              <Receipt size={32} />
              {cartQuantity && cartQuantity >= 1 
                ? <AmountOfOrders>{cartQuantity}</AmountOfOrders>
                : null
              }
            </Link>
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
          text={isAdmin ? 'Novo prato' : `Pedidos (${cartQuantity})`}
          icon={!isAdmin ? <Receipt /> : null}
          to={isAdmin ? '/admin/newPlate' : '/order'}
        />

        <SignOut onClick={handleLogout} />
      </HeaderContentDesktop>
    </HeaderContainer>
  )
}
