import {
  HeaderContainer,
  HeaderContent,
  OrderWrapper,
  AmountOfOrders,
} from './styles'
import { Logo } from '../../components/Logo'
import { Receipt, List } from 'phosphor-react'

export function Header() {
  const isAdmin = false

  return (
    <HeaderContainer>
      <HeaderContent>
        <List size={32} />
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
