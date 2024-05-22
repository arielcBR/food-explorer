import { FileInputContainer } from './styles'
import { UploadSimple } from 'phosphor-react'

export function FileInput({ text, name }) {
  return (
    <FileInputContainer>
      <UploadSimple />
      <span>{text}</span>
      <input type="file" name={name} id={name} />
    </FileInputContainer>
  )
}
