import {
  HeaderContainer,
  HeaderContent,
  OrderWrapper,
  AmountOfOrders,
} from './styles'
import { Logo } from '../../components/Logo'
import { Receipt, List } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <List size={32} />
        <Logo />
        <OrderWrapper>
          <Receipt size={32} />
          <AmountOfOrders>5</AmountOfOrders>
        </OrderWrapper>
      </HeaderContent>
    </HeaderContainer>
  )
}
