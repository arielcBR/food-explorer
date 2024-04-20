import { Routes, Route } from 'react-router-dom'

import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  )
}
