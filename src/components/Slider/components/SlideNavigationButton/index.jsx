
import { ButtonContainer } from './styles'
import { CaretRight, CaretLeft } from 'phosphor-react'
import { useSwiper } from 'swiper/react'

export function SlideNavigationButton({type}) {
  const swiper = useSwiper()

  return (
    <ButtonContainer 
      onClick={type === 'next' ? () => swiper.slideNext() : () => swiper.slidePrev()}
    >
      {type === 'next' ? <CaretRight /> : <CaretLeft /> }
    </ButtonContainer>
  )
}


