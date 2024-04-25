import { TitleText } from '../../../../components/Typography'
import { Slider } from '../../../../components/Slider'
import { OurDishesContainer, SliderContainer } from './styles'

import slides from '../../../../../mock.json'

export function OurDishes({ title }) {
  return (
    <OurDishesContainer className="container">
      <TitleText>{title}</TitleText>

      <SliderContainer>
        <Slider slides={slides} />
      </SliderContainer>
    </OurDishesContainer>
  )
}
