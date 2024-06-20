import { Heart, PencilSimple } from 'phosphor-react'
import {
  DishCardContainer,
  DishName,
  DishImage,
  DishPrice,
  DishDescription,
  FavoriteIconWrapper,
} from './styles'
import { Button } from '../../../../components/Button'
import { QuantityInput } from '../../../../components/QuantityInput'
import { formatter } from '../../../../utils/Formatter'
import { useAuth } from '../../../../hooks/AuthContext'
import { useMenu } from '../../../../context/MenuContext'

export function DishCard({dish}) {
  const { user } = useAuth()
  const isAdmin = user ? user.isAdmin : false
  const { menuVisible } = useMenu()
  const mobileViewPort = menuVisible

  const {name, description, price, image} = dish;

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
          {!mobileViewPort && <DishDescription>{description}</DishDescription>}
          <DishPrice>{priceFormatted}</DishPrice>
        </DishCardContainer>
      ) : (
        <DishCardContainer>
          <FavoriteIconWrapper>
            <Heart />
          </FavoriteIconWrapper>

          <DishImage src={image} />
          <DishName>{name}</DishName>
          {!mobileViewPort && <DishDescription>{description}</DishDescription>}
          <DishPrice>{priceFormatted}</DishPrice>
          <QuantityInput />
          <Button text="Incluir" />
        </DishCardContainer>
      )}
    </>
  )
}
