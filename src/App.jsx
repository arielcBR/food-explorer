import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyled } from './styles/global'

// import { Home } from './pages/Home'
// import { SignUp } from './pages/SignUp'
// import { SignIn } from './pages/SignIn'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <Home /> */}
      </ThemeProvider>
    </BrowserRouter>
  )
}
