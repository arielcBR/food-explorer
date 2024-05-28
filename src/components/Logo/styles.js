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

  > p {
    font-size: ${({ theme }) => theme.textSizes['text-regular-0']};
    color: ${({ theme }) => theme.colors['cake-200']};
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    & {
      position: relative;
      width: 10rem;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    > p {
      position: absolute;
      bottom: -12px;
      right: 0px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    & {
      position: relative;
      width: 11.625rem;

      > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    > p {
      position: absolute;
      bottom: -12px;
      right: 0px;
    }
  }
`

export const ImageLogo = styled.img`
  height: 24px;
  width: 24px;

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    & {
      height: 20px;
      width: 20px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    & {
      height: 30px;
      width: 30px;
    }
  }
`

export const TextLogo = styled.span`
  font-weight: 700;
  font-size: 1.375rem;
  color: ${({ theme }) => theme.colors['light-100']};

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    & {
      font-size: ${({ theme }) => theme.textSizes['text-regular-2']};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    & {
      font-size: ${({ theme }) => theme.textSizes['text-regular-4']};
    }
  }
`
