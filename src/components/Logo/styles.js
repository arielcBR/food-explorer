import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;
  text-decoration: none;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  img {
    width: 22px;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 700;
    font-size: 1.3518rem;
    color: ${({ theme }) => theme.colors['light-100']};
  }

  p {
    font-size: ${({ theme }) => theme.textSizes['text-regular-0']};
    color: ${({ theme }) => theme.colors['cake-200']};
  }
`
