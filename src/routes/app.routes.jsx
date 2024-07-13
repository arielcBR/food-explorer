import { Routes, Route } from 'react-router-dom'
import { useAuth } from '../hooks/AuthContext'

import { DefaultLayout } from '../Layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Plate } from '../pages/Plate'
import { NewPlate } from '../pages/NewPlate'
import { EditPlate } from '../pages/EditPlate'
import { Search } from '../pages/Search'

export function AppRoutes() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/plate/:dishId" element={<Plate />} />
        <Route path="/search/" element={<Search />} />
      </Route>

      {user.isAdmin && (
        <>
          <Route path="/admin" element={<DefaultLayout />}>
            <Route path="/admin/newPlate" element={<NewPlate />} />
            <Route path="/admin/editPlate/:dishId" element={<EditPlate />} />
          </Route>
        </>
      )}
    </Routes>
  )
}
