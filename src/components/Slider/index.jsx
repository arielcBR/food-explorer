import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { DishCard } from '../../pages/Home/components/DishCard'
import 'swiper/swiper-bundle.css'

import imageDish from '../../assets/image 2.png'

export function Slider({ slides }) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        375: {
          slidesPerView: 2,
          spaceBetween: 110,
        },
        425: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        1366: {
          slidesPerView: 5,
          spaceBetween: 60,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <DishCard image={imageDish} name={slide.name} price={slide.price} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
