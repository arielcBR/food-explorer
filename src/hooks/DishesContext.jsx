import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext'
import { getFavoriteDishesByUser, updateFavoriteDish, getSearchDishes } from '../services/api'

const DishesContext = createContext({})

function DishesProvider({ children }) {
  const { user } = useAuth()
  const [favoriteDishes, setFavoriteDishes] = useState([])
  const [resultSearch, setResultSearch] = useState([])
  
  async function fetchFavorite(){
    if(user && user.id) {
      const response = await getFavoriteDishesByUser(user.id)
      setFavoriteDishes(response.data)
      return response.data
    }

    return []
  }

  async function toggleFavoriteDish(dishId){
    if(user){
      await updateFavoriteDish(user.id, dishId)
      fetchFavorite()
    }
  }

  async function fetchSearchDishes(query){
    const response = await getSearchDishes(query)
    setResultSearch(response)
  }

  useEffect( () => {
    fetchFavorite()
  }, [user])

  return (
    <DishesContext.Provider value={{favoriteDishes, toggleFavoriteDish, fetchSearchDishes, resultSearch}}>
      {children}
    </DishesContext.Provider>
  )
}

const useDishes = () => {
  return useContext(DishesContext)
}

export { DishesProvider, useDishes }