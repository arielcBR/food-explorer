import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  background: ${({ theme }) => theme.colors['dark-600']};
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  margin: 0 auto;
  width: 100%;

  > a {
    width: 8.875rem;
  }

  > p {
    color: ${({ theme }) => theme.colors['light-200']};
    font-family: ${({ theme }) => theme.fonts.dmSans};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes['text-regular-0']};
  }

  @media (min-width: ${DEVICE_BREAKPOINT.SM}) {
    & {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
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
