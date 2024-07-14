import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const SearchContainer = styled.div`
  background: ${({ theme }) => theme.colors['dark-400']};
  color: ${({ theme }) => theme.colors['light-300']};
  font-family: ${({ theme }) => theme.fonts.poppins};
  padding: 2.2rem 0 2.2rem 0;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;

  > main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: flex-start;

    margin-top: 1.5rem;
  }

  > a {
    margin-top: 2rem;
    width: 50%;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}){
    > main {
      grid-template-columns: 45% 55%;
      gap: 3rem;
    }

    > a {
    width: 45%;
    }

  }
`
export const MyOrder = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  
  max-width: 65rem;  
  width: 100%;

  > h2 {
    font-size: ${({ theme }) => theme.textSizes['text-regular-4']};
  }    

  > ul {
    list-style: none;
    
    > li {

      > a {
        text-decoration: none;
      }
    }
  }
`
export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  background: ${({ theme }) => theme.colors['dark-600']};
  border-radius: 8px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5), 4px 4px 8px rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors['light-200']};
  padding: 1rem 1rem;
  position: relative;
  margin-bottom: 0.5rem;
  width: 100%;

  > svg {
    position: absolute;
    right: 0.75rem;
    top: 1rem;

    color: ${({ theme }) => theme.colors['light-200']};
    cursor: pointer;
    height: 1.25rem;
    width: 1.25rem;

    &:hover{
      color: ${({ theme }) => theme.colors['light-400']};
    }
  }

  > img {
    height: 6.25rem;
    width: 6.25rem;
  }

  > div {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 0.5rem;

    width: 100%;

    > h4 {
      font-size: ${({ theme }) => theme.textSizes['text-regular-2']};
      text-transform: capitalize;
    }

    > span {
      font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
    }
  }

  > div > div {
    display: flex;
    gap: 0.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    > svg { 
      height: 1.5rem;
      width: 1.5rem;
    }
    
    > img {
      margin: 0 auto;
      height: 8rem;
      width: 8rem;
    }

    > div {
      width: 60%;

      > h4 {
        font-size: ${({ theme }) => theme.textSizes['text-regular-3']};
        font-weight: 700;
      }

      > div span {
        font-size: ${({ theme }) => theme.textSizes['text-regular-3']};
      }

    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    > div {
      width: 70%;
    }
  }
`
export const Payment = styled.section`
  display: flex;
  flex-direction: column;
  
`