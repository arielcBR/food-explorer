import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { DishCard } from '../../pages/Home/components/DishCard'
import 'swiper/swiper-bundle.css'

import imageDish from '../../assets/image 2.png'

export function Slider({ slides }) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={100}
      slidesPerView={2}
      pagination={{ clickable: true }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <DishCard image={imageDish} name={slide.name} price={slide.price} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
