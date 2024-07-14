import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer, Quantity } from './styles'

export function QuantityInput({ onIncrement, onDecrement, quantity }) {
  return (
    <QuantityInputContainer>
      <IconWrapper onClick={onDecrement} disabled={quantity <= 1}>
        <Minus weight="fill" />
      </IconWrapper>
      <Quantity>
        {quantity ? quantity.toString().padStart(2, '0') : '01'}
      </Quantity>
      <IconWrapper onClick={onIncrement} disabled={quantity >= 99}>
        <Plus weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
