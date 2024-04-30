import styled from 'styled-components'

export const MenuMobileContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  background: ${({ theme }) => theme.colors['dark-400']};
  height: 100%;
  width: 100;

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  background: ${({ theme }) => theme.colors['dark-700']};
  color: ${({ theme }) => theme.colors['light-100']};
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 1.375rem;
  padding: 3.75rem 1.75rem 1.75rem;

  svg {
    font-size: 1.375rem;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  padding: 2.25rem 1.75rem;

  > div {
    margin-bottom: 2rem;
  }

  > nav {
    align-self: flex-start;
    width: 100%;

    > ul {
      display: flex;
      flex-direction: column;

      list-style: none;

      > li {
        border-bottom: 1px solid ${({ theme }) => theme.colors['dark-1000']};
        padding: 0.625rem;
        width: 100%;

        > a {
          justify-content: flex-start;
          font-size: ${({ theme }) => theme.textSizes['text-regular-4']};
          font-weight: 300;
        }
      }
    }
  }
`
