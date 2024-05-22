import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../Layouts/DefaultLayout'
import { NewPlate } from '../pages/NewPlate'
import { EditPlate } from '../pages/EditPlate'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/admin/" element={<DefaultLayout />}>
        <Route path="newPlate" element={<NewPlate />} />
        <Route path="editPlate/:id" element={<EditPlate />} />
      </Route>
    </Routes>
  )
}
