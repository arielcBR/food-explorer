import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const ButtonContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: ${({ theme }) => theme.colors['tomato-100']};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors['light-100']};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['tomato-200']};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors['tomato-400']};
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XL}) {
    font-size: ${({ theme }) => theme.textSizes['text-regular-0']};
    padding: ${({ size }) =>
      size === 'large' ? '0.75rem 1.25rem' : '0.75rem 1rem'};
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
    padding: ${({ size }) =>
      size === 'large' ? '0.75rem 2rem' : '0.75rem 1.5rem'};
  }
`
