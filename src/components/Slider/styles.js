import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'
import { Swiper } from 'swiper/react'

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

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    display: block;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
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
