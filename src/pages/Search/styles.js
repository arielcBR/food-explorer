import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors['dark-400']};
  color: ${({ theme }) => theme.colors['light-300']};
  font-family: ${({ theme }) => theme.fonts.poppins};
  padding: 2.2rem 0 2.2rem 0;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;

  > a {
    align-self: flex-start;
    font-size: ${({ theme }) => theme.textSizes['text-regular-3']};

    > svg {
      width: 1.5rem;
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    max-width: 65rem;
    margin-top: 1.5rem;

    width: 100%;

    > h2 {
      font-size: ${({ theme }) => theme.textSizes['text-regular-4']};
    }

    > ul {
      list-style: none;

      > li {
        cursor: pointer;

        > a {
          text-decoration: none;
        }
      }
    }
  }
`

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background: ${({ theme }) => theme.colors['dark-600']};
  border-radius: 8px;
  box-shadow:
    4px 4px 8px rgba(0, 0, 0, 0.5),
    4px 4px 8px rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors['light-200']};
  padding: 1rem 1rem;
  margin-bottom: 0.5rem;
  width: 100%;

  > img {
    height: 6.25rem;
    width: 6.25rem;
  }

  > div {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 0.5rem;

    width: 100%;

    > p {
      font-size: ${({ theme }) => theme.textSizes['text-regular-3']};
    }

    > span:nth-of-type(1) {
      font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
    }

    > span:nth-of-type(2) {
      font-size: ${({ theme }) => theme.textSizes['text-regular-2']};
      font-weight: 700;
    }

    .description {
      display: none;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    > img {
      margin: 0 auto;
      height: 8rem;
      width: 8rem;
    }

    > div {
      width: 60%;

      > p {
        font-size: ${({ theme }) => theme.textSizes['text-regular-4']};
        font-weight: 700;
      }

      > span:nth-of-type(1) {
        font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
      }

      > span:nth-of-type(2) {
        font-size: ${({ theme }) => theme.textSizes['text-regular-2']};
        font-weight: 700;
      }

      .description {
        display: block;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    > div {
      width: 70%;
    }
  }
`
