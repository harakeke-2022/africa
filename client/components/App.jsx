import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Country from './Country'
import Home from './Home'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/:id" element={<Country />} />
      </Routes>
    </>
  )
}

export default App
