import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors['dark-600']};
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  margin: 0 auto;
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 10;

  > a {
    width: 142px;
  }

  > p {
    color: ${({ theme }) => theme.colors['light-200']};
    font-family: ${({ theme }) => theme.fonts.dmSans};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes['text-regular-0']};
  }
`
export const LogoFooter = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6.5px;

  text-decoration: none;

  > span {
    color: ${({ theme }) => theme.colors['light-700']};
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 700;
    font-size: ${({ theme }) => theme.textSizes['text-regular-2']};
  }
`
