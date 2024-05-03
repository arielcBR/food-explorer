import { Heart, PencilSimple } from 'phosphor-react'
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
  const isAdmin = false
  const priceFormatted = formatter.currency(price)

  return (
    <>
      {isAdmin ? (
        <DishCardContainer>
          <FavoriteIconWrapper>
            <PencilSimple />
          </FavoriteIconWrapper>

          <DishImage src={image} />
          <DishName>{name}</DishName>
          <DishPrice>{priceFormatted}</DishPrice>
        </DishCardContainer>
      ) : (
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
      )}
    </>
  )
}
