import { HomeContainer } from './styles'
import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { OurDishes } from './components/OurDishes'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <OurDishes title="Refeições" />
      <OurDishes title="Pratos principais" />
      <OurDishes title="Bebidas principais" />
    </HomeContainer>
  )
}
