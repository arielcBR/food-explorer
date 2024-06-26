import { Link } from 'react-router-dom'
import { api } from '../../../../services/api'
import { useEffect, useState } from 'react'
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
  const [img, setImg] = useState('')
  const { user } = useAuth()
  const isAdmin = user ? user.isAdmin : false

  const {id, name, description, price, picture} = dish
  const dishFavorite = false
  const priceFormatted = formatter.currency(price)

  async function getDishPicture() {
    try {
      const response = await api.get(`/files/${picture}`, { responseType: 'blob' })
      const imageBlob = response.data
      const imageObjectURL = URL.createObjectURL(imageBlob)
      setImg(imageObjectURL)
    } catch (error) {
      console.error('Error fetching image:', error)
    }
  }

  useEffect(() => {
    getDishPicture()
  }, [])

  return (
    <DishCardContainer>
      {isAdmin 
        ? 
        <IconWrapper to={`/admin/editPlate/${id}`}>
          <PencilSimple />
        </IconWrapper>
        : 
        <IconWrapper to={`/setFavorite`}>
          <Heart 
            weight={dishFavorite ? "fill" : "regular"} 
            className={dishFavorite ? "favorite" : ""} 
          />
        </IconWrapper>
      }

      <Link to={`/plate/${id}`}>
        <DishImage src={img} />
      </Link>
      <DishName>{name}</DishName>
      <DishDescription>{description}'</DishDescription>
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
