import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :root {
    font-size: 16px;
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

  body, input-security, textarea, button {
    font: 400 1rem ${({ theme }) => theme.fonts.roboto}, sans-serif;
  }

  input, button, textarea {
    border: none;
  }

  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

`
