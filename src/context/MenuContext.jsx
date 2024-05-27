import { createContext, useContext, useState } from 'react'

const MenuContext = createContext({})

export function MenuProvider({ children }) {
  const [menuVisible, setMenuVisible] = useState(false)

  function statusMobileMenu(state) {
    setMenuVisible(state)
  }

  return (
    <MenuContext.Provider value={{ menuVisible, statusMobileMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {
  return useContext(MenuContext)
}
