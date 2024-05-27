import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MenuMobile } from '../components/MenuMobile'
import { LayoutContainer, MainContent } from './styles'
import { useMenu } from '../context/MenuContext'

export function DefaultLayout() {
  const { menuVisible } = useMenu()

  return (
    <LayoutContainer>
      {menuVisible && <MenuMobile />}
      {!menuVisible && (
        <>
          <Header />
          <MainContent className="container">
            <Outlet />
          </MainContent>
          <Footer />
        </>
      )}
    </LayoutContainer>
  )
}
