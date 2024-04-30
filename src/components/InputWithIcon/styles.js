import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  background: ${({ theme }) => theme.colors['dark-900']};
  border-radius: 8px;
  padding: 0.75rem 0.875rem;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors['light-400']};

    > svg {
      font-size: 1.5rem;
    }
  }
`
export const InputStyled = styled.input`
  background: ${({ theme }) => theme.colors['dark-900']};
  border: none;
  color: ${({ theme }) => theme.colors['light-500']};
  width: 100%;
`
