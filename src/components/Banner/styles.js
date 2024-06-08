import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const BannerContainer = styled.figure`
  position: relative;
  width: 100%;
  height: clamp(7.5rem, 23vw, 25rem);
  margin-top: clamp(4.4rem, 12vw, 16rem);
  padding-right: clamp(0.5rem, 6vw, 7rem);
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors['gradient-200']};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  > div {
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    > img {
      position: absolute;
      bottom: 0;
      left: -1rem;
      z-index: 1;
      width: clamp(11.7rem, 45vw, 50rem);
    }

    h2 {
      z-index: 1;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors['light-300']};
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: clamp(0.86rem, 3.5vw, 3rem);
      font-weight: 500;
      line-height: 140%;
    }

    p {
      z-index: 1;
      width: clamp(55%, 37vw, 100%);
      color: ${({ theme }) => theme.colors['light-300']};
      font-family: ${({ theme }) => theme.fonts.roboto};
      font-size: clamp(0.63rem, 1.8vw, 1.2rem);
      font-weight: 400;
      line-height: 100%;
    }

    @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
      > div {
        > img {
          left: -3rem;
        }
      }
    }
  }
`
