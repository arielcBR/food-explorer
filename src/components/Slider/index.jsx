import {
  CarouselContainer,
  GradientOverlayLeft,
  GradientOverlayRight,
} from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y } from 'swiper/modules'
import { DishCard } from '../../pages/Home/components/DishCard'
import 'swiper/swiper-bundle.css'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

import imageDish from '../../assets/image 2.png'
import { useEffect, useState } from 'react'

export function Slider({ slides }) {
  const [isDesktopViewportWidth, setIsDesktopViewportWidth] = useState(false)

  const updateNavigationSwiper = () => {
    const viewportWidth = parseInt(window.innerWidth)

    setIsDesktopViewportWidth(viewportWidth >= 1024)
  }

  useEffect(() => {
    updateNavigationSwiper()
    window.addEventListener('resize', updateNavigationSwiper)
    return () => window.removeEventListener('resize', updateNavigationSwiper)
  }, [])

  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        navigation={isDesktopViewportWidth}
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
          1270: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <DishCard image={imageDish} name={slide.name} price={slide.price} />
          </SwiperSlide>
        ))}
      </Swiper>

      {isDesktopViewportWidth && (
        <>
          <GradientOverlayLeft />
          <GradientOverlayRight />
        </>
      )}
    </CarouselContainer>
  )
}
