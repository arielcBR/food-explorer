import styled, { css } from 'styled-components'

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
  padding: 0.75rem 0.875rem;
  width: 100%;

  ${({ errorMessage }) =>
    errorMessage &&
    css`
      border: 1px solid ${({ theme }) => theme.colors['tomato-200']};
    `}
`
export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors['tomato-200']};
  font-size: ${({ theme }) => theme.textSizes['title-1']};
  margin: 0.25rem 0;
  height: 1.25rem;
  width: 100%;
`
