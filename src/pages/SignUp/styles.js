import styled from 'styled-components'

export const SignUpContainer = styled.div`
  background: ${({ theme }) => theme.colors['dark-400']};
  max-width: 26.75rem;
  padding: 9.875rem 2.9375rem 0 4.0625rem;
  margin: 0 auto;
  height: 100vh;
  width: 100%;

  > a {
    img {
      height: 43px;
      width: 43px;
    }
    span {
      font-size: 2.35rem;
    }
  }
`

export const CompleteSignUp = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;

  margin-top: 4.5625rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`
