import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyled } from './styles/global'

import { SignUp } from './pages/SignUp'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />

      <SignUp />
    </ThemeProvider>
  )
}
