import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { AuthProvider } from './hooks/AuthContext.jsx'
import { MenuProvider } from './context/MenuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </AuthProvider>
  </React.StrictMode>,
)
