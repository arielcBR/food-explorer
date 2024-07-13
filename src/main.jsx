import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { DishesProvider } from './hooks/DishesContext.jsx'
import { AuthProvider } from './hooks/AuthContext.jsx'
import { MenuProvider } from './hooks/MenuContext.jsx'
import { CartProvider } from './hooks/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <DishesProvider>
        <CartProvider>
          <MenuProvider>
            <App />
          </MenuProvider>
        </CartProvider>
      </DishesProvider>
    </AuthProvider>
  </React.StrictMode>,
)
