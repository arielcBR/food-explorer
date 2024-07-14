import { useEffect, useState } from 'react'
import {
  CarouselContainer,
  GradientOverlayLeft,
  GradientOverlayRight,
  StyledSwiper,
} from './styles'
import { SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y } from 'swiper/modules'
import { DishCard } from '../../pages/Home/components/DishCard'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'
import 'swiper/swiper-bundle.css'

export function Slider({ slides }) {
  const [desktopViewportWidth, setDesktopViewportWidth] = useState(false)

  function updateNavigationSwiper() {
    const viewportWidth = parseInt(window.innerWidth)

    setDesktopViewportWidth(viewportWidth >= 1024)
  }

  useEffect(() => {
    updateNavigationSwiper()
    window.addEventListener('resize', updateNavigationSwiper)
    return () => window.removeEventListener('resize', updateNavigationSwiper)
  }, [])

  return (
    <CarouselContainer>
      <StyledSwiper
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        navigation={desktopViewportWidth}
        loop
        style={{
          '--swiper-navigation-size': '25px',
        }}
        breakpoints={{
          [parseInt(DEVICE_BREAKPOINT.XS)]: {
            slidesPerView: 2,
            spaceBetween: 110,
          },
          [parseInt(DEVICE_BREAKPOINT.SM)]: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          [parseInt(DEVICE_BREAKPOINT.MD)]: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          [parseInt(DEVICE_BREAKPOINT.LG)]: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
          [parseInt(DEVICE_BREAKPOINT.XL)]: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <DishCard dish={slide} />
          </SwiperSlide>
        ))}
      </StyledSwiper>

      <GradientOverlayLeft />
      <GradientOverlayRight />
    </CarouselContainer>
  )
}
