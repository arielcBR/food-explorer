import React, { useEffect, useState } from 'react'
import { SelectWrapper, SelectStyled } from './styles'
import { CaretDown } from 'phosphor-react'

export function Select({ name, category, updateCategory }) {
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (event) => {
    const newValue = event.target.value
    setSelectedValue(newValue)
    updateCategory(newValue)
  }

  useEffect(() => {
    setSelectedValue(category || '')
  }, [category])

  return (
    <SelectWrapper>
      <SelectStyled
        id={name}
        name={name}
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">Selecione uma categoria</option>
        <option value="meal">Refeição</option>
        <option value="drink">Bebidas</option>
        <option value="dessert">Sobremesas</option>
      </SelectStyled>
      <CaretDown />
    </SelectWrapper>
  )
}
