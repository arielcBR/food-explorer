import { useEffect, useState } from 'react'
import { TitleText } from '../../../../components/Typography'
import { Slider } from '../../../../components/Slider'
import { OurDishesContainer, SliderContainer } from './styles'
import { api } from '../../../../services/api'

export function OurDishes({ title, category }) {
  const [dishes, setDishes] = useState([])

  async function getDishes() {
    const token = localStorage.getItem('@foodexplorer:token').replaceAll('"', '')
    
    if (!token) {
      console.error('Token not found')
      return
    }

    try {
      const response = await api.get('/dish/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const dishesFiltered = response.data.dishes.filter((dish) => dish.category === category)
      setDishes(dishesFiltered)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDishes()
  }, [])

  return (
    <OurDishesContainer>
      <TitleText>{title}</TitleText>

      <SliderContainer>
        <Slider slides={dishes} />
      </SliderContainer>
    </OurDishesContainer>
  )
}
