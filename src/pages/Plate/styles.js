import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const PlateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors['dark-400']};
  padding: 2.2rem 0 2.2rem 0;
  margin: 0 auto;
  width: 100%;

  > a {
    align-self: flex-start;
  }

  > main {
    max-width: 26.75rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    img {
      margin: 1rem auto;
      height: 16.5rem;
      width: 16.5rem;
    }
    
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    > main {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;  
      gap: 2rem;

      max-width: none;
      margin-top: 4rem;

      > img {
        height: 19rem;
        width: 19rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.XL}) {
    > main {
      gap: 3rem;
      > img {
        height: 24.375rem;
        width: 24.375rem;
      }
    }
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
    text-transform: capitalize;
  }

  > p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    align-items: flex-start;

    > p {
      text-align: start;
    }
  }
`
export const IngredientTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;

  width: 100%;

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    justify-content: flex-start;
  }
`
export const PlateFooter = styled.div`
  > button { 
    width: 100%;
  }

  > div {
    display: grid;
    grid-template-columns: 35% auto;
    grid-column-gap: 1rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    > a { 
      width: fit-content;
    }
    
    > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;

      width: fit-content;
    }
  }
`
