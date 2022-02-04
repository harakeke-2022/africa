import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()

  const routeChange = () => {
    const path = '/:id'
    navigate(path)
  }

  return (
    <div>
      <h1>Welcome to the Continient of Africa 🌍 </h1>
      <audio src='/media/Toto-Africa.mp3' autoPlay="autoplay"></audio>
      <button onClick={routeChange}>Click Me 🦁 </button>
      <img src='/media/1Africa.png'></img>

    </div>

  )
}

export default Home
