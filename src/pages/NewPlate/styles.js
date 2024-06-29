import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const NewPlateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  padding: 0.6rem 0 2.2rem 0;
  max-width: 38rem;
  min-height: 100vh;
  width: 100%;

  > a {
    align-self: flex-start;

    font-size: ${({ theme }) => theme.textSizes['text-regular-2']};
    margin-bottom: 1.5rem;

    > svg {
      height: 20px;
      width: 20px;
    }
  }

    > h2 {
    align-self: flex-start;

    color: ${({ theme }) => theme.colors['light-300']};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: ${({ theme }) => theme.textSizes['text-regular-5']};
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 1.5rem;
  }

  > form {
    margin-bottom: 1.5rem;
  }

  > button { 
    max-width: none;
    width: 100%;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}){
    & {
      max-width: 80rem;
      padding-top: 3rem;
    }
  
    > a {
      font-size: ${({theme}) => theme.textSizes['text-regular-3']};
    }

    > button { 
      align-self: flex-end;
      width: 11rem;
    }
  }

`