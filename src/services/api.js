import axios from 'axios'

const URL_SERVER = 'http://localhost:4000'

export const api = axios.create({
  baseURL: URL_SERVER
})


api.interceptors.request.use(config => {
  const token = JSON.parse(localStorage.getItem('@foodexplorer:token'));

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function getDishPicture(picture) {
  try {
    const response = await api.get(`/files/${picture}`, { responseType: 'blob' })
    const imageBlob = response.data
    const imageObjectURL = URL.createObjectURL(imageBlob)
    return imageObjectURL
  } catch (error) {
    console.error('Error fetching image:', error)
  }
}

export async function getDish(id) {
    try {
      const response = await api.get(`/dish/${id}`)                        
      const dish = response.data.dish
      dish.picture = await getDishPicture(dish.picture)
      return dish
      
    } catch (error) {
      console.log(error)
    }
}

export async function getFavoriteDishesByUser(user_id){
  try {
    const listOfFavoriteDishes = await api.get(`users/favorites/${user_id}`) 
    return listOfFavoriteDishes
  } catch (error) {
    console.log(error)
  }
}

export async function updateFavoriteDish(userId, dishId){
  try {
    await api.post('/users/favorites', { userId, dishId })
  } catch (error) {
    console.log(error)
  }
}

export async function getAllDishes(category){
  try {
    const response = await api.get('/dish/')
    const dishesFiltered = response.data.dishes.filter((dish) => dish.category === category)
    return dishesFiltered

  } catch (error) {
    console.log(error)
  }
}

export async function createDish(dish, imageFile){
  if(dish){
    try { 
      const formData = new FormData()
      formData.append('dishPicture', imageFile)
      formData.append('bodyDish', JSON.stringify(dish))

      const response = await api.post(`/dish/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }) 
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export async function updateDish(id, dishUpdated, imageFile){
  if(dishUpdated && id){
    try { 
      const formData = new FormData()
      formData.append('dishPicture', imageFile)
      formData.append('updatedDish', JSON.stringify(dishUpdated))

      const response = await api.patch(`/dish/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }) 
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export async function deleteDish(dishId){
  if(dishId){
    try { 
      const response = await api.delete(`/dish/${dishId}`) 
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export async function getSearch(query){
  try {
    if (query && query.length >= 2) {
      const response = await api.get('/dish/search', {
        params: {
          dish: query
        }
      });

      if(response.data){
        return response.data;
      }
      else {
        return []
      }
    }
  } catch (error) {
    console.log(error);
  }
}



