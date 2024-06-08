import { BannerContainer } from './styles'
import imgHero from '../../assets/hero.png'

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <img src={imgHero} alt="" />
        <h2>Sabores Inigualáveis</h2>
        <p>Sinto o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </BannerContainer>
  )
}
