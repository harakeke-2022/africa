import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()

  const routeChange = () => {
    const path = '/:id'
    navigate(path)
  }

  return (
    <>
      <h1>Welcome to the Continient of Africa 🌍 </h1>
      <h1>Hello i am home</h1>
      <audio src='/media/Toto-Africa.mp3' autoPlay="autoplay"></audio>
      <img src='/media/1Africa.png'></img>
      <button onClick={routeChange}>Click Me 🦁 </button>

    </>

  )
}

export default Home
