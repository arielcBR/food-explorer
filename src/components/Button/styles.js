import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: ${({ theme }) => theme.colors['tomato-100']};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors['light-100']};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
  font-weight: 500;
  line-height: 24px;
  padding: 0.75rem;
  width: 100%;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['tomato-200']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`
