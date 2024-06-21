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
  min-height: 20rem;
  width: clamp(12rem, 25vw, 15.5rem);

  .hidden {
    display: none;
  }
`

export const IconWrapper = styled(Link)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;

  svg {
    color: ${({ theme }) => theme.colors['light-300']};
    height: 22px;
    width: 24px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors['light-500']};
  }
`

export const DishName = styled.p`
  font-family: ${({ theme }) => theme.fonts.popins};
  font-size: ${({ theme }) => theme.textSizes['text-regular-3']};
  color: ${({ theme }) => theme.colors['light-300']};
  text-align: center;

  &::after {
    content: ' >';
  }

  @media (min-width:${DEVICE_BREAKPOINT.LG}){
    font-weight: 700;
  }
`

export const DishImage = styled.img`
  height: 88px;
  width: 88px;
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
  font-size: ${({ theme }) => theme.textSizes['text-regular-3']};
`


export const IncludeDishWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5.75rem;
  grid-column-gap: 1rem;
`