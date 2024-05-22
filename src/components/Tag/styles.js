import styled from 'styled-components'

export const TagContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors['light-600']};
  color: ${({ theme }) => theme.colors['light-100']};
  padding: 0.625rem 1rem;

  > svg {
    color: ${({ theme }) => theme.colors['light-100']};
    height: 0.85rem;
    width: 0.85rem;
  }
`
