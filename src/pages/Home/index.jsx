import { HomeContainer } from './styles'
import { Banner } from '../../components/Banner'
import { OurDishes } from './components/OurDishes'

export function Home() {
  return (
    <>
      <HomeContainer>
        <Banner />
        <OurDishes title="Refeições" category="meal" />
        <OurDishes title="Pratos principais" category="dessert" />
        <OurDishes title="Bebidas principais" category="drink" />
      </HomeContainer>
    </>
  )
}
