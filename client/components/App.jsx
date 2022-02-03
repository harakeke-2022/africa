import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Country } from './Country'

const App = () => {
  return (
    <>
      <h1>Welcome to the Continient of Africa 🌍 </h1>
      <Routes>
        <button><Route path='/:id' element={<Country />} />Click</button>
      </Routes>
    </>
  )
}

export default App
