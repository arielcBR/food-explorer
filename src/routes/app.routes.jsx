import { Routes, Route } from 'react-router-dom'

import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { Home } from '../pages/Home'
import { Plate } from '../pages/Plate'
import { DefaultLayout } from '../Layouts/DefaultLayout'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/plate/:id" element={<Plate />} />
      </Route>
    </Routes>
  )
}
