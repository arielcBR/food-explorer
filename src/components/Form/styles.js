import styled from 'styled-components'
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;

  > div { 
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  
  @media (min-width: ${DEVICE_BREAKPOINT.LG}){

    .wrapper-input-top {
      display: grid;
      grid-template-columns: 30% 40% auto;
      grid-template-rows: 100%;
      grid-column-gap: 2rem;
    }
    
    .wrapper-input-middle {
      display: grid;
      grid-template-columns: auto 23%;
      grid-template-rows: 100%;
      grid-column-gap: 2rem;
    }

  }

`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  width: 100%;

  & input,
  select {
    height: 3rem;
  }

  & textarea {
    height: 10.75rem;
  }



`
