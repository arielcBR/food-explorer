import styled from 'styled-components'

export const TagsWrapperContainer = styled.div`
  display: flex;
  gap: 1rem;

  background: ${({ theme }) => theme.colors['dark-800']};
  border-radius: 8px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ theme }) => theme.textSizes['text-regular-1']};
  line-height: 100%;
  padding: 0.25rem 0.5rem;
  width: 100%;
`
export const NewTag = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  background: none;
  border: 1px ${({ theme }) => theme.colors['light-500']} dashed;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors['light-500']};
  padding: 0.875rem 1rem;

  > svg {
    color: ${({ theme }) => theme.colors['light-500']};
    height: 0.85rem;
    width: 0.85rem;
  }
`
