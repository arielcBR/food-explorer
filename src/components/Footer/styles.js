import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors['dark-600']};
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  margin: 0 auto;

  > a {
    width: 142px;
  }

  > span {
    color: ${({ theme }) => theme.colors['light-200']};
    font-family: ${({ theme }) => theme.fonts.dmSans};
    font-size: 0.75rem;
  }
`
