import { InputWrapper, InputStyled } from './styles'
import { useEffect, useState } from 'react'
import { useDishes } from '../../hooks/DishesContext'
import { useMenu } from '../../hooks/MenuContext'
import { useLocation, useNavigate } from 'react-router-dom'

export function InputWithIcon({
  icon,
  placeholder,
  name,
  type = 'text',
  ...rest
}) {
  const [query, setQuery] = useState('')
  const { fetchSearchDishes } = useDishes()
  const { statusMobileMenu } = useMenu()
  const navigate = useNavigate()
  const location = useLocation()

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleOnClick()
    }
  }

  async function handleOnClick() {
    if (query.length >= 2) {
      await fetchSearchDishes(query)
      statusMobileMenu(false)
      navigate('/search')
    }
  }

  useEffect(() => {
    if (location.pathname !== '/search') {
      setQuery('')
    }
  }, [location])

  return (
    <InputWrapper>
      <div onClick={handleOnClick}>{icon}</div>
      <InputStyled
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    </InputWrapper>
  )
}
