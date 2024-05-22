import { TagsWrapperContainer, NewTag } from './styles'
import { Plus } from 'phosphor-react'
import { Tag } from '../Tag'

export function TagsWrapper() {
  return (
    <TagsWrapperContainer>
      <Tag text="Pão" />

      <NewTag>
        <p>Adicionar</p>
        <Plus />
      </NewTag>
    </TagsWrapperContainer>
  )
}
