// src/routes/app.routes.jsx

import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/AuthContext'
import { DefaultLayout } from '../Layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Plate } from '../pages/Plate'
import { NewPlate } from '../pages/NewPlate'
import { EditPlate } from '../pages/EditPlate'
import { Search } from '../pages/Search'
import { Order } from '../pages/Order'

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

export function AppRoutes() {
  const location = useLocation()
  const { user } = useAuth()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<DefaultLayout />}>
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
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/plate/:dishId"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Plate />
            </motion.div>
          }
        />
        <Route
          path="/search"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Search />
            </motion.div>
          }
        />
        <Route
          path="/order"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Order />
            </motion.div>
          }
        />
      </Route>

      {user.isAdmin && (
        <Route path="/admin" element={<DefaultLayout />}>
          <Route
            path="/admin/newPlate"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <NewPlate />
              </motion.div>
            }
          />
          <Route
            path="/admin/editPlate/:dishId"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <EditPlate />
              </motion.div>
            }
          />
        </Route>
      )}
    </Routes>
  )
}
