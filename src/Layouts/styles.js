import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background: ${({ theme }) => theme.colors['dark-400']};
  margin: 0 auto;
  position: relative;
  width: 100%;

  > footer {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  `

export const Content = styled.div`
  margin-bottom: 4rem;
  width: 100%;
`
