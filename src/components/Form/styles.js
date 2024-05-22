import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  height: auto;
  width: 100%;
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
