import { FileInputContainer } from './styles'
import { UploadSimple } from 'phosphor-react'

export function FileInput({ text, name, updateFileInput }) {

  function handleOnChangeInput(event){
    const imgSelected = event.target.files[0] 
    updateFileInput(imgSelected)
  }

  return (
    <FileInputContainer>
      <UploadSimple />
      <span>{text}</span>
      <input type="file" name={name} id={name} onChange={handleOnChangeInput}/>
    </FileInputContainer>
  )
}
