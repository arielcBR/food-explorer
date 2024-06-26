import { createContext, useContext, useState, useEffect } from 'react'


import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn(email, password) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { token, user } = response.data
      
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', JSON.stringify(token))

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setData({ user, data })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else alert('Não foi possível entrar!')
    }
  }

  async function signUp(name, email, password) {
    try {
      const response = await api.post('/users', {name, email, password})

      if(response.status === 201)
        alert('Usuário cadastrado com sucesso!')
    } 
    catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } 
    }
  }
  

  async function logout() {
    localStorage.removeItem('@foodexplorer:user')
    localStorage.removeItem('@foodexplorer:token')

    api.defaults.headers.common.Authorization = ''
    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user')
    const token = localStorage.getItem('@foodexplorer:token')

    if (token && user) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      setData({
        user: JSON.parse(user),
        token,
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }
