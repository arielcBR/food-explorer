import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
