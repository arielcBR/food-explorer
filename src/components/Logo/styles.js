import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  cursor: pointer;
  text-decoration: none;

  img {
    width: 22px;

    ${({ variant }) =>
      variant === 'footer' &&
      css`
        color: ${({ theme }) => theme.colors['light-700']};
      `}
  }

  span {
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 700;

    ${({ variant }) =>
      variant === 'header'
        ? css`
            font-size: 1.3518rem;
            color: ${({ theme }) => theme.colors['light-100']};
          `
        : css`
            font-size: 0.953875rem;
            color: ${({ theme }) => theme.colors['light-700']};
          `}
  }

  p {
    font-size: ${({ theme }) => theme.textSizes['text-regular-0']};
    color: ${({ theme }) => theme.colors['cake-200']};
  }
`
