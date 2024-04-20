import styled from 'styled-components'

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.67125rem;

  height: 2.7rem;
  width: 100%;

  span {
    color: ${({ theme }) => theme.colors['light-100']};
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 2.3275rem;
    font-weight: 700;
  }
`
