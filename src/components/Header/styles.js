import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors['dark-700']};
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 3.5rem 0 1.5rem 0;

  svg {
    color: ${({ theme }) => theme.colors['light-100']};
    cursor: pointer;
  }

  a {
    flex: 1;
  }
`

export const HeaderContentMobile = styled(HeaderContent)`
  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    display: none;
  }
`

export const HeaderContentDesktop = styled(HeaderContent)`
  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    & {
      gap: 2rem;

      padding: 1.5rem 0 1.5rem 0;
    }

    div {
      gap: 0.875rem;
      input {
        text-align: center;
      }
    }

    button {
      padding: 0.75rem 2rem;
      width: 216px;
    }
  }
`

export const OrderWrapper = styled.div`
  display: flex;
  position: relative;
`

export const AmountOfOrders = styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.colors['tomato-100']};
  color: ${({ theme }) => theme.colors['light-100']};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
  font-weight: 500;
  text-align: center;
  height: 20px;
  width: 20px;

  position: absolute;
  top: -5px;
  left: 20px;
`
export const SignOutWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    > svg {
      color: ${({ theme }) => theme.colors['light-100']};
      height: 32px;
      width: 32px;
    }
  }
`
