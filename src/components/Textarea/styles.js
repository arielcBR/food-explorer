import styled from 'styled-components'

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`
export const TextareaStyled = styled.textarea`
  background: ${({ theme }) => theme.colors['dark-900']};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors['light-500']};
  padding: 0.75rem 0.875rem;
  resize: none;
  width: 100%;
`
