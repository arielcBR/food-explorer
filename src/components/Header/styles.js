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

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    a {
      flex: 1;
    }
  }
`

export const HeaderContentMobile = styled(HeaderContent)`
  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    display: none;
  }
`

export const HeaderContentDesktop = styled(HeaderContent)`
  > svg {
    display: flex;
    align-items: center;

    cursor: pointer;
    height: 2rem;
    width: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    & {
      gap: 2rem;

      padding: 1.5rem 0 1.5rem 0;
      margin: 0 auto;
    }

    > div {
      width: 36.3125rem;

      div {
        justify-content: flex-end;
        width: 5rem;
      }

      input {
        flex: 1;
      }
    }

    button {
      padding: 0.75rem 2rem;
      width: 13.5rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    & {
      gap: 2rem;

      padding: 1.5rem 0 1.5rem 0;
      margin: 0 auto;
    }

    > div {
      width: 36.3125rem;

      div {
        justify-content: flex-end;
        width: 10.5rem;
      }

      input {
        flex: 1;
      }
    }

    button {
      padding: 0.75rem 2rem;
      width: 13.5rem;
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
