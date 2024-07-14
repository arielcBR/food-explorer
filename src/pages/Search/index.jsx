import { CustomLink } from '../../components/CustomLink'
import { SearchContainer, CardItem } from './styles'
import { formatter } from '../../utils/Formatter'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDishes } from '../../hooks/DishesContext'
import { getDishPicture } from '../../services/api'

export function Search() {
  const [dishes, setDishes] = useState([])
  const { resultSearch } = useDishes()

  useEffect(() => {
    async function fetchPictures() {
      if (resultSearch && resultSearch.length > 0) {
        const dishesWithPictures = await Promise.all(
          resultSearch.map(async (item) => {
            const picture = await getDishPicture(item.picture)
            return { ...item, picture }
          }),
        )
        setDishes(dishesWithPictures)
      }
    }

    fetchPictures()
  }, [resultSearch])

  return (
    <SearchContainer>
      <CustomLink to="/" icon="true" text="voltar" />
      <main>
        <h2>Resultados da busca</h2>
        {dishes && dishes.length ? (
          <ul>
            {dishes.map((item) => (
              <li key={item.id}>
                <Link to={`/plate/${item.id}`}>
                  <CardItem>
                    <img src={item.picture} alt="" />
                    <div>
                      <p>{item.name}</p>
                      <span className="description">{item.description}</span>
                      <span>{formatter.currency(item.price)}</span>
                    </div>
                  </CardItem>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <p>Desculpa, nada foi encontrado &#128542;</p>
          </div>
        )}
      </main>
    </SearchContainer>
  )
}
