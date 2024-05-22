import styled from 'styled-components'

export const NewPlateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.6rem 3.5rem 2.2rem 3.5rem;
  max-width: 26.75rem;
  width: 100%;

  > a {
    align-self: flex-start;

    font-size: ${({ theme }) => theme.textSizes['text-regular-2']};
    margin-bottom: 1.5rem;

    > svg {
      height: 20px;
      width: 20px;
    }
  }

  > h2 {
    align-self: flex-start;

    color: ${({ theme }) => theme.colors['light-300']};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: ${({ theme }) => theme.textSizes['text-regular-5']};
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 1.5rem;
  }

  > form {
    margin-bottom: 1.5rem;
  }

  > button {
    height: 3rem;
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2rem;

  > button {
    font-size: ${({ theme }) => theme.textSizes['text-regular-0']};
    height: 3rem;
  }
`
