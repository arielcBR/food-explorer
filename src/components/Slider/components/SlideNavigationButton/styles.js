import styled from 'styled-components'

// export const ButtonWrapperNavigation = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   position: absolute;
//   top: 35%;
//   left: 0;

//   padding: 0.5rem;
//   width: 100%;
//   z-index: 100;
// `

export const ButtonContainer = styled.button`
  background-color: transparent;

  > svg {
    color: ${({ theme }) => theme.colors['light-100']};
    height: 30px;
    width: 30px;

    transition: 0.3s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors['light-200']};
  }
`