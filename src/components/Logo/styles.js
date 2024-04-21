import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
  text-decoration: none;

  ${({ size }) =>
    size === 'sm'
      ? css`
          gap: 0.5rem;
        `
      : css`
          gap: 0.67125rem;
        `}

  img {
    ${({ size }) =>
      size === 'sm'
        ? css`
            width: 24px;
          `
        : css`
            width: 24px;
          `}
  }

  span {
    color: ${({ theme }) => theme.colors['light-100']};
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 700;

    ${({ size }) =>
      size === 'sm'
        ? css`
            font-size: 1.3275rem;
          `
        : css`
            font-size: 2.3275rem;
          `}
  }
`
