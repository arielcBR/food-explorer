import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/AuthContext'
import { AnimatePresence } from 'framer-motion'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Router() {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {user ? <AppRoutes /> : <AuthRoutes />}
      </AnimatePresence>
    </BrowserRouter>
  )
}
