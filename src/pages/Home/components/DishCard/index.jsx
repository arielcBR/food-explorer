import { Heart, PencilSimple } from 'phosphor-react'
import {
  DishCardContainer,
  DishName,
  DishImage,
  DishPrice,
  DishDescription,
  IconWrapper,
  IncludeDishWrapper,
} from './styles'
import { Button } from '../../../../components/Button'
import { QuantityInput } from '../../../../components/QuantityInput'
import { formatter } from '../../../../utils/Formatter'
import { useAuth } from '../../../../hooks/AuthContext'

export function DishCard({dish}) {
  const { user } = useAuth()
  const isAdmin = user ? user.isAdmin : false

  const {name, description, price, image} = dish;

  const priceFormatted = formatter.currency(price)

  return (
        <DishCardContainer>
          <IconWrapper>
            {isAdmin ? <PencilSimple /> : <Heart />}
          </IconWrapper>

          <DishImage src={image} />
          <DishName>{name}</DishName>
          <DishDescription>{description}</DishDescription>
          <DishPrice>{priceFormatted}</DishPrice>

          {!isAdmin &&
            <IncludeDishWrapper>
              <QuantityInput />
              <Button variant="medium" text="Incluir" />
            </IncludeDishWrapper>
          }
        </DishCardContainer>
  )
}
