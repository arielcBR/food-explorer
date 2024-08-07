import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  background: ${({ theme }) => theme.colors['dark-900']};
  border-radius: 5px;
  padding: 0.875rem 0.75rem;
  outline: none;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 1.5rem;
    width: 50%;

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    max-width: none;

    > div {
      width: 1.5rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    padding: 0.7rem 0.75rem;
    max-width: 25rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    padding: 0.75rem 0.875rem;
    max-width: 36.3125rem;
  }
`
export const InputStyled = styled.input`
  background: ${({ theme }) => theme.colors['dark-900']};
  border: none;
  color: ${({ theme }) => theme.colors['light-100']};
  font-size: 1rem;
  line-height: 100%;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 0.875rem;
  }
`
