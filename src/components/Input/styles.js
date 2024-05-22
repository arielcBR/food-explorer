import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: ${({ theme }) => theme.textSizes['text-regular-2']};

  width: 100%;
`
export const InputStyled = styled.input`
  background: ${({ theme }) => theme.colors['dark-900']};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors['light-500']};
  padding: 0.75rem 0.875rem;
  width: 100%;
`
