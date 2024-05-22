import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MenuMobile } from '../components/MenuMobile'
import { LayoutContainer } from './styles'
import { useMenu } from '../context/MenuContext'

export function DefaultLayout() {
  const { menuVisible } = useMenu()

  return (
    <LayoutContainer>
      {menuVisible && <MenuMobile />}
      {!menuVisible && (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </LayoutContainer>
  )
}
