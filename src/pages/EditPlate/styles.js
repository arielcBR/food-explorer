import styled from 'styled-components'

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;

  > button {
    font-size: ${({ theme }) => theme.textSizes['text-regular-0']};
    height: 3rem;
  }

  .deleteButton {
    background: ${({ theme }) => theme.colors['dark-800']};
    color: ${({ theme }) => theme.colors['light-100']};
  }
`
