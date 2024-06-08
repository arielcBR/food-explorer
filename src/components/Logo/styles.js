import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  > p {
    font-size: ${({ theme }) => theme.textSizes['text-regular-0']};
    color: ${({ theme }) => theme.colors['cake-200']};
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    position: relative;
    max-width: 10rem;

    > p {
      position: absolute;
      bottom: -12px;
      right: 0px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    position: relative;
    max-width: 11.5rem;

    > div {
      gap: 0.5rem;
    }

    > p {
      position: absolute;
      bottom: -12px;
      right: 0px;
    }
  }
`

export const ImageLogo = styled.img`
  height: 1.5rem;
  width: 1.5rem;

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    & {
      height: 1.75rem;
      width: 1.75rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    & {
      height: 2rem;
      width: 2rem;
    }
  }
`

export const TextLogo = styled.span`
  font-weight: 700;
  font-size: clamp(1rem, 50vw, 1.5rem);
  color: ${({ theme }) => theme.colors['light-100']};
`
