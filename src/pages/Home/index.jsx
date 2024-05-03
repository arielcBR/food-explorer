import { HomeContainer } from './styles'
import { Banner } from '../../components/Banner'
import { OurDishes } from './components/OurDishes'
import { MenuMobile } from '../../components/MenuMobile'

export function Home() {
  return (
    <>
      {/* <MenuMobile menuIsVisible="" setMenuIsVisible="" /> */}
      <HomeContainer>
        <Banner />
        <OurDishes title="Refeições" />
        <OurDishes title="Pratos principais" />
        <OurDishes title="Bebidas principais" />
      </HomeContainer>
    </>
  )
}
