import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`
export const InputStyled = styled.input`
  background: ${({ theme }) => theme.colors['dark-900']};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors['light-500']};
  margin-bottom: 2rem;
  padding: 0.75rem 0.875rem;
  width: 100%;
`
