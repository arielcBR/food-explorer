import styled from 'styled-components'
import { Button } from '../../components/Button'

export const PlateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors['dark-400']};
  padding: 2.2rem 3.5rem;
  max-width: 26.75rem;
  width: 100%;

  > a {
    align-self: flex-start;
  }

  > img {
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 264px;
    width: 264px;
  }
`
export const PlateDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors['light-300']};
  font-family: ${({ theme }) => theme.fonts.poppins};
  line-height: 140%;
  margin-bottom: 3rem;

  > h2 {
    font-size: 1.6875rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  > p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`
export const IngredientTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`

export const StyledButton = styled(Button)`
  flex: 1;
`

export const PlateFooter = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`
