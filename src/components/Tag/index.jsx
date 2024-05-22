import { TagContainer } from './styles'
import { X } from 'phosphor-react'

export function Tag({ text }) {
  return (
    <TagContainer>
      <p>{text}</p>
      <X />
    </TagContainer>
  )
}
