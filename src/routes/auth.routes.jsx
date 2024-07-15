import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'

const pageTransition = {
  type: 'tween',
  duration: 0.5,
  ease: 'anticipate',
}

const pageVariants = {
  initial: { x: '100%' },
  in: { x: 0 },
  out: { x: '-100%' },
}

export function AuthRoutes() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/register"
        element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <SignUp />
          </motion.div>
        }
      />
      <Route
        path="/"
        element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <SignIn />
          </motion.div>
        }
      />
    </Routes>
  )
}
