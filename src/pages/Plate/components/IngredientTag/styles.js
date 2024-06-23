import styled from 'styled-components'

export const IngredientTagContainer = styled.div`
  background: ${({ theme }) => theme.colors['dark-1000']};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors['light-100']};
  padding: 0.25rem 0.5rem;
  text-align: center;
  width: fit-content;
`
