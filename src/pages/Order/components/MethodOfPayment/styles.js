import styled from 'styled-components'

export const MethodOfPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors['light-600']};
  margin-top: 1rem;
  max-width: 36rem;
  width: 100%;

  > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${({ theme }) => theme.colors['light-600']};

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      background-color: ${({ theme }) => theme.colors['dark-500']};
      border-right: 1px solid ${({ theme }) => theme.colors['light-600']};
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      cursor: pointer;
      padding: 1.25rem;
      width: 50%;

      > svg,
      img {
        color: ${({ theme }) => theme.colors['light-100']};
        height: 1.5rem;
        width: 1.5rem;
      }
    }
  }

  > div:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2.9375rem 8.125rem;

    > img {
      height: 250px;
      width: 250px;
    }
  }

  .clicked {
    background: ${({ theme }) => theme.colors['dark-800']} !important;
  }
`
