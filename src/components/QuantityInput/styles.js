import styled, { css } from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.875rem;

  background: ${({ theme }) => theme.colors['dark-200']};
  width: 100%;
`

export const Quantity = styled.span`
  background: none;
  color: ${({ theme }) => theme.colors['light-300']};
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ theme }) => theme.textSizes['text-regular-2']};
  text-align: center;
  width: 100%;
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors['light-100']};
  transition: 0.4s;
  width: auto;

  > svg {
    height: 18px;
    width: 18px;
  }

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['light-500']};
  }
`
