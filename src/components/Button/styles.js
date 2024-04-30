import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors['tomato-100']};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors['light-100']};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
  font-weight: 500;
  padding: 0.75rem;
  width: 100%;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['tomato-200']};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors['tomato-400']};
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${({ size }) =>
    size === 'sm' &&
    css`
      padding: 0.75rem 1.5rem;
      height: 2rem;
    `}

  ${({ size }) =>
    size === 'm' &&
    css`
      padding: 0.75rem 1.5rem;
      height: 3rem;
    `}
`
