import {
  HeaderContainer,
  HeaderContent,
  OrderWrapper,
  AmountOfOrders,
} from './styles'
import { Logo } from '../../components/Logo'
import { Receipt, List } from 'phosphor-react'
import { useMenu } from '../../context/MenuContext'

export function Header() {
  const isAdmin = false
  const { setMenuVisible } = useMenu()

  function handleOpenMenu() {
    setMenuVisible(true)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <List size={32} onClick={handleOpenMenu} />
        <Logo />
        {!isAdmin && (
          <OrderWrapper>
            <Receipt size={32} />
            <AmountOfOrders>5</AmountOfOrders>
          </OrderWrapper>
        )}
      </HeaderContent>
    </HeaderContainer>
  )
}
