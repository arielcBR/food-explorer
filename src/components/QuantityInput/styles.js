import styled, { css } from 'styled-components'

export const QuantityInputContainer = styled.div`
  background: ${({ theme }) => theme.colors['dark-200']};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  width: 100px;

  input {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors['light-300']};
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: ${({ theme }) => theme.textSizes['text-regular-2']};
    text-align: center;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors['light-100']};
  transition: 0.4s;
  height: 0.875rem;
  width: 0.875rem;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['light-500']};
  }
`
