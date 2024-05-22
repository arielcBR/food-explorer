import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'
import { formatter } from '../../utils/Formatter'
import { useState } from 'react'

export function QuantityInput({ size = 'medium' }) {
  const [quantityValue, setQuantityValue] = useState(1)

  function handleIncrementQuantity() {
    setQuantityValue((prev) => prev + 1)
  }

  function handleDecrementQuantity() {
    setQuantityValue((prev) => prev - 1)
  }

  return (
    <QuantityInputContainer size={size}>
      <IconWrapper
        onClick={handleDecrementQuantity}
        disabled={quantityValue <= 1}
      >
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={formatter.number(quantityValue)} />
      <IconWrapper
        onClick={handleIncrementQuantity}
        disabled={quantityValue >= 15}
      >
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
