import { BannerContainer, BannerImage, BannerText } from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <BannerImage />
      <BannerText>
        <h2>Sabores Inigualáveis</h2>
        <p>Sinto o cuidado do preparo com ingredientes selecionados.</p>
      </BannerText>
    </BannerContainer>
  )
}
