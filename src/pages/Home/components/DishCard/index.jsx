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
import { Link } from 'react-router-dom'

export function DishCard({dish}) {
  const { user } = useAuth()
  const isAdmin = user ? user.isAdmin : false

  const {id, name, description, price, image} = dish;
  const idDish = '12'
  const priceFormatted = formatter.currency(price)

  return (
    <DishCardContainer>
      {isAdmin 
        ? 
        <IconWrapper to={`/admin/editPlate/${idDish}`}>
          <PencilSimple/>
        </IconWrapper>
        : 
        <IconWrapper to={`/setFavorite`}>
          <Heart />
        </IconWrapper>
      }

      <Link to={`/plate/${idDish}`}>
        <DishImage src={image} />
      </Link>
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
