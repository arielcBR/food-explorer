import styled from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    > svg {
      display: none;
    }

    transition: 0.3s ease-in-out;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    color: ${({ theme }) => theme.colors['light-500']};
  }
`

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;

  pointer-events: none;
  height: 100%;
  width: 40%;
  z-index: 10;
`

export const GradientOverlayLeft = styled(GradientOverlay)`
  left: 0;
  background: ${({ theme }) => theme.colors['gradient-100-180']};
`

export const GradientOverlayRight = styled(GradientOverlay)`
  right: 0;
  background: ${({ theme }) => theme.colors['gradient-100-90']};
`

export const NavigationButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 35%;
  left: 0;

  padding: 0.5rem;
  width: 100%;
  z-index: 100;
`

export const NavigationButton = styled.button`
  background-color: transparent;

  > svg {
    color: ${({ theme }) => theme.colors['light-100']};
    height: 30px;
    width: 30px;

    transition: 0.3s ease-in-out;
  }

  &:hover {
    /* color: ${({ theme }) => theme.colors['light-200']}; */
  }
`
