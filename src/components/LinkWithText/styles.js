import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkWithTextContainer = styled(Link)`
  color: ${({ theme }) => theme.colors['light-100']};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
  font-weight: 500;
  line-height: 24px;
  margin-top: 2rem;
  text-align: center;
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors['light-300']};
    transform: scale(1.025);
  }
`
