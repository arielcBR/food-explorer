import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const CustomLinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors['light-100']};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  transition: 0.4s;

  > svg {
    color: ${({ theme }) => theme.colors['light-100']};
    height: 2rem;
    width: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors['light-300']};
    transform: scale(1.025);
  }

  ${({ icon }) =>
    icon &&
    css`
      font-size: ${({ theme }) => theme.textSizes['text-regular-4']};
    `}
`
