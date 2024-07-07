import styled from 'styled-components'

export const TagsWrapperContainer = styled.div`
  display: flex;
  gap: 1rem;

  background: ${({ theme }) => theme.colors['dark-800']};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
  line-height: 100%;
  padding: 0.25rem 0.5rem;
  width: 100%;
`

export const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors['light-600']};
  color: ${({ theme }) => theme.colors['light-100']};
  padding: 0.625rem 1rem;

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors['light-100']};
    height: 0.85rem;
    transition: 0.3s ease-in;
    width: 0.85rem;
  }

  > svg:hover{
    color: ${({ theme }) => theme.colors['light-400']};
  }
`


export const NewTag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  background: none;
  border: 1px ${({ theme }) => theme.colors['light-500']} dashed;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors['light-500']};
  padding: 0.875rem 1rem;

  > input {
    background: ${({ theme }) => theme.colors['dark-800'] };
    border: none;
    color: ${({ theme }) => theme.colors['light-500']};
    height: fit-content;
    max-width: 6rem;
  }
 
  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors['light-500']};
    height: 0.85rem;
    transition: 0.3s;
    width: 0.85rem;
  }

  > svg:hover { 
    color: ${({ theme }) => theme.colors['light-300']};
  }
`
