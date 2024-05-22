import styled from 'styled-components'

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    pointer-events: none;
    color: ${({ theme }) => theme.colors['light-400']};
  }
`

export const SelectStyled = styled.select`
  background: ${({ theme }) => theme.colors['dark-900']};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors['light-500']};
  padding: 0.75rem 0.875rem;
  width: 100%;

  appearance: none;
  -webkit-appearance: none;
`
