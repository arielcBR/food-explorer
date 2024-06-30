import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../../../styles/deviceBreakpoints'

export const DishCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  background: ${({ theme }) => theme.colors['dark-200']};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors['dark-300']};
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  position: relative;
  text-decoration: none;
  min-height: 20rem;
  width: clamp(12.5rem, 25vw, 15.5rem);

  @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    min-height: 16rem;
  }
`

export const IconWrapper = styled(Link)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;

  svg {
    color: ${({ theme }) => theme.colors['light-300']};
    height: 24px;
    width: 24px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors['light-500']};
  }

  .favorite {
    color: red;
  }
`

export const DishName = styled.p`
  font-family: ${({ theme }) => theme.fonts.popins};
  font-size: ${({ theme }) => theme.textSizes['text-regular-1 ']};
  font-weight: 400;
  color: ${({ theme }) => theme.colors['light-300']};
  text-align: center;

  @media (min-width:${DEVICE_BREAKPOINT.LG}){
    font-size: ${({ theme }) => theme.textSizes['text-regular-3']};
    font-weight: 700;
  }
`

export const DishImage = styled.img`
  height: 5.5rem;
  width: 5.5rem;

  @media (min-width:${DEVICE_BREAKPOINT.SM}){
    height: 6.25rem;
    width: 6.25rem;
  }

  @media (min-width:${DEVICE_BREAKPOINT.MD}){
    height: 7rem;
    width: 7rem;
  }

  @media (min-width:${DEVICE_BREAKPOINT.LG}){
    height: 8.5rem;
    width: 8.5rem;
  }

  @media (min-width:${DEVICE_BREAKPOINT.XL}){
    height: 11rem;
    width: 11rem;
  }
`

export const DishDescription = styled.p`
  color: ${({ theme }) => theme.colors['light-400']};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
  line-height: 160%;
  text-align: center;

  @media (max-width:${DEVICE_BREAKPOINT.LG}){
    display: none;
  }
`

export const DishPrice = styled.p`
  color: ${({ theme }) => theme.colors['cake-200']};
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ theme }) => theme.textSizes['text-regular-2']};

  @media (min-width:${DEVICE_BREAKPOINT.LG}){
    font-size: ${({ theme }) => theme.textSizes['text-regular-3']};
  }
`

export const IncludeDishWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5.75rem;
  grid-column-gap: 1rem;
  width: 100%;

  > div {
    margin: 0 auto;
    max-width: 6.25rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    grid-template-columns: 1fr;
    grid-template-rows: auto auto; 
    grid-row-gap: 1rem;
  }
`