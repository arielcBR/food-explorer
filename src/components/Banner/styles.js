import styled from 'styled-components'
import imgHero from '../../assets/hero.png'

export const BannerContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-end;

  border-radius: 3px;
  background: ${({ theme }) => theme.colors['gradient-200']};
  margin: 2.75rem 1rem 0 2.25rem;
  position: relative;
  height: 7.5rem;
`

export const BannerImage = styled.div`
  background-image: url(${imgHero});
  background-size: cover;
  transform: rotateY(180deg);
  position: absolute;
  top: -30px;
  left: -25px;
  height: 149px;
  width: 191px;
`

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;

  color: ${({ theme }) => theme.colors['light-300']};
  font-family: ${({ theme }) => theme.fonts.poppins};
  padding-bottom: 1.25rem;
  width: 13.5rem;

  > h2 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  > p {
    font-size: ${({ theme }) => theme.textSizes['text-regular-0']};
    font-weight: 400;
  }
`
