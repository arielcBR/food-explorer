import styled from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
`

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;

  pointer-events: none;
  height: 100%;
  width: 40%;
  z-index: 2;
`

export const GradientOverlayLeft = styled(GradientOverlay)`
  left: 0;
  background: ${({ theme }) => theme.colors['gradient-100-180']};
`

export const GradientOverlayRight = styled(GradientOverlay)`
  right: 0;
  background: ${({ theme }) => theme.colors['gradient-100-90']};
`
