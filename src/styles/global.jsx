import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINT } from '../styles/deviceBreakpoints'

export const GlobalStyled = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :root {
    font-size: 16px;
    background: ${({ theme }) => theme.colors['dark-400']};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']}
  }

  body {
    background-color: ${({ theme }) => theme['gray-800']};
    color: ${({ theme }) => theme['gray-100']}; 
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem ${({ theme }) => theme.fonts.roboto}, sans-serif;
  }

  input, button, textarea {
    border: none;
    box-shadow: none;
  }

  input:focus { 
      outline: 0; 
      -webkit-box-shadow: none;
  }

  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .hidden {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    .container {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    .container {
      padding-left: 6rem;
      padding-right: 6rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    .container {
      padding-left: 7.6875rem;
      padding-right: 7.6875rem;
    }
  }

`
