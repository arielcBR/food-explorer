import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background: ${({ theme }) => theme.colors['dark-400']};
  margin: 0 auto;
  width: 100%;
`

export const MainContent = styled.div`
  flex: 1;
`
