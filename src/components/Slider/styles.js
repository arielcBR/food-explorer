import styled from 'styled-components'
import { DishCard } from '../../pages/Home/components/DishCard'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'
import { Swiper } from 'swiper/react';


export const StyledSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    transition: 0.3s ease-in-out;
    z-index: 500; 
  }
`

export const CarouselContainer = styled.div`
  position: relative;
`

const GradientOverlay = styled.div`
  display: none;
  position: absolute;
  top: 0;

  pointer-events: none;
  height: 100%;
  width: 30%;
  z-index: 10;

  @media (min-width: ${DEVICE_BREAKPOINT.LG}){
    display: block;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}){
    width: 25%;
  }
`

export const GradientOverlayLeft = styled(GradientOverlay)`
  left: 0;
  background: ${({ theme }) => theme.colors['gradient-100-180']};
`

export const GradientOverlayRight = styled(GradientOverlay)`
  right: 0;
  background: ${({ theme }) => theme.colors['gradient-100-90']};
`

export const EmptyDishCard = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  background: ${({ theme }) => theme.colors['dark-200']};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors['dark-300']};
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  position: relative;
  text-decoration: none;
  min-height: 20rem;
  width: clamp(12.5rem, 25vw, 15.5rem);

  @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    min-height: 16rem;
  }
`