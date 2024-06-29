import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors['dark-700']};
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 5.9375rem;
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
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 21% 1fr 10rem 2rem;
  column-gap: 1rem;
  max-width: 102rem;

  > div {
    max-width: 60rem;
  }

  > svg {
    display: flex;
    align-items: center;

    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    padding: 1.5rem 0 1.5rem 0;
    margin: 0 auto;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    grid-template-columns: 18% 1fr 13.5rem 2rem;
    column-gap: 2rem;

    padding: 1.5rem 0 1.5rem 0;
    margin: 0 auto;

    > svg {
      height: 2rem;
      width: 2rem;
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
