import { HomeContainer } from './styles'
import { Banner } from '../../components/Banner'
import { OurDishes } from './components/OurDishes'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <OurDishes title="Refeições" />
      <OurDishes title="Pratos principais" />
      <OurDishes title="Bebidas principais" />
    </HomeContainer>
  )
}
