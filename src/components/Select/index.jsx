import { CaretDown } from 'phosphor-react'
import { SelectWrapper, SelectStyled } from './styles'

export function Select({ name, ...rest }) {
  const id = name

  return (
    <SelectWrapper>
      <SelectStyled id={id} name={name} {...rest}>
        <option value="meal">Refeição</option>
        <option value="beverages">Bebidas</option>
        <option value="desserts">Sobremesas</option>
      </SelectStyled>
      <CaretDown />
    </SelectWrapper>
  )
}
