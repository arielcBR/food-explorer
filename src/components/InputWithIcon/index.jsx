import { InputWrapper, InputStyled } from './styles'
import { getSearch } from '../../services/api'
import { useState } from 'react'

export function InputWithIcon({
  icon,
  placeholder,
  name,
  type = 'text',
  ...rest
}) {
  const id = name

  const [query, setQuery] = useState('')

  async function handleOnClick(){
    const response = await getSearch(query)
    console.log(response)
  }

  return (
    <InputWrapper>
      <div onClick={handleOnClick} >{icon}</div>
      <InputStyled
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={event => setQuery(event.target.value) }
        {...rest}
      />
    </InputWrapper>
  )
}
