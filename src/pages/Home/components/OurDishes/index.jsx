import { useEffect, useState } from 'react'
import { TitleText } from '../../../../components/Typography'
import { Slider } from '../../../../components/Slider'
import { OurDishesContainer, SliderContainer } from './styles'
import { getAllDishes } from '../../../../services/api'

export function OurDishes({ title, category }) {
  const [dishes, setDishes] = useState([])

  async function getDishes() {
    const response = await getAllDishes(category)
    setDishes(response)
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
