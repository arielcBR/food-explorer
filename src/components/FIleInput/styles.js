import styled from 'styled-components'

export const FileInputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  background: ${({ theme }) => theme.colors['dark-800']};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors['light-100']};
  padding: 0.75rem 2rem;
  width: 100%;

  > svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  > span {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
    font-weight: 500;
    line-height: 150%;
    white-space: nowrap;
  }

  input[type='file'] {
    display: none;
  }
`
