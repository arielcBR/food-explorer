import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer, Quantity } from './styles'
import { useState } from 'react'

export function QuantityInput() {
  const [quantityValue, setQuantityValue] = useState(1)

  function handleIncrementQuantity() {
    setQuantityValue((prev) => prev + 1)
  }

  function handleDecrementQuantity() {
    setQuantityValue((prev) => prev - 1)
  }

  return (
    <QuantityInputContainer>
      <IconWrapper onClick={handleDecrementQuantity} disabled={quantityValue <= 1}>
        <Minus weight="fill" />
      </IconWrapper>
      <Quantity>{quantityValue.toString().padStart(2, '0')}</Quantity>
      <IconWrapper onClick={handleIncrementQuantity} disabled={quantityValue >= 99}>
        <Plus weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
