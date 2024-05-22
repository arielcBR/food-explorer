import { createContext, useContext, useState } from 'react'

const MenuContext = createContext()

export function MenuProvider({ children }) {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {
  return useContext(MenuContext)
}
