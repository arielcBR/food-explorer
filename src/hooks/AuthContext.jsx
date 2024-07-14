import { createContext, useContext, useState, useEffect } from 'react'
import { notification } from '../utils/Notification.js'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn(email, password) {
    try {
      const session = await api.post('/sessions', { email, password })
      const { token, user } = session.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', JSON.stringify(token))

      if (session.status === 201) {
        notification.success(`Seja bem-vindo ${user.name}`)
      }

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setData({ user })
    } catch (error) {
      notification.error(error.response.data.message)
    }
  }

  async function signUp(name, email, password) {
    try {
      const response = await api.post('/users', { name, email, password })

      if (response.status === 201)
        notification.success('Usuário cadastrado com sucesso!')
    } catch (error) {
      notification.error(error.response.data.message)
    }
  }

  async function logout() {
    localStorage.removeItem('@foodexplorer:user')
    localStorage.removeItem('@foodexplorer:token')
    localStorage.removeItem('@foodexplorer:cart')
    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user')
    const token = localStorage.getItem('@foodexplorer:token')

    if (token && user) {
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
