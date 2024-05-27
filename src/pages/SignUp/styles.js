import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors['dark-400']};
  padding: 0 2.9375rem 0 4.0625rem;
  margin: 0 auto;
  height: 100vh;
  max-width: 90rem;
  width: 100%;

  > a {
    img {
      height: 43px;
      width: 43px;
    }
    span {
      font-size: 2.35rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XS}) {
    padding: 0;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    padding: 0 6.6718rem 0 10.078rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    & {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export const CompleteSignUp = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;

  margin-top: 4.5625rem;
  width: 19.75rem;

  > h2 {
    display: none;

    color: ${({ theme }) => theme.colors['light-100']};
    font-family: Poppins;
    font-size: ${({ theme }) => theme.textSizes['text-regular-5']};
    font-weight: 500;
    line-height: 140%;
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    & {
      width: 24.6875rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    & {
      background: ${({ theme }) => theme.colors['dark-700']};
      border-radius: 16px;
      margin: 0;
      padding: 3rem;
      width: 23.75rem;
    }

    > h2 {
      display: block;
    }
  }
`
