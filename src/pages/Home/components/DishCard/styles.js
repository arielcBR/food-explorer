import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  width: clamp(12rem, 25vw, 13.5rem);

  .hidden {
    display: none;
  }
`

export const FavoriteIconWrapper = styled(Link)`
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
  color: ${({ theme }) => theme.colors['light-300']};
  text-align: center;

  &::after {
    content: ' >';
  }
`

export const DishImage = styled.img`
  height: 88px;
  width: 88px;
`
export const DishPrice = styled.p`
  color: ${({ theme }) => theme.colors['cake-200']};
`

export const DishDescription = styled.p`
  color: ${({ theme }) => theme.colors['light-400']};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 14px;
  line-height: 160%;
`