import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors['dark-700']};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 3.5rem 1.75rem 1.5rem;

  svg {
    color: ${({ theme }) => theme.colors['light-100']};
    cursor: pointer;
  }
`

export const OrderWrapper = styled.div`
  display: flex;
  position: relative;
`

export const AmountOfOrders = styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.colors['tomato-100']};
  color: ${({ theme }) => theme.colors['light-100']};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
  font-weight: 500;
  text-align: center;
  height: 20px;
  width: 20px;

  position: absolute;
  top: -5px;
  left: 20px;
`
