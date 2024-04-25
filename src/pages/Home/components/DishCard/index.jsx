import { Heart } from 'phosphor-react'
import {
  DishCardContainer,
  DishName,
  DishImage,
  DishPrice,
  FavoriteIconWrapper,
} from './styles'
import { Button } from '../../../../components/Button'
import { QuantityInput } from '../../../../components/QuantityInput'
import { formatter } from '../../../../utils/Formatter'

export function DishCard({ image, name, price }) {
  const priceFormatted = formatter.currency(price)

  return (
    <DishCardContainer>
      <FavoriteIconWrapper>
        <Heart />
      </FavoriteIconWrapper>

      <DishImage src={image} />
      <DishName>{name}</DishName>
      <DishPrice>{priceFormatted}</DishPrice>

      <QuantityInput />
      <Button size="sm" text="Incluir" />
    </DishCardContainer>
  )
}
