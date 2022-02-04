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
      <h3>Click the button to learn about South Africa</h3>
      <audio src='/media/Toto-Africa.mp3' autoPlay="autoplay"></audio>
      <img src='/media/1Africa.png'></img>
      <button className="button" style={{ backgroundColor: '#2400ff' }} onClick={routeChange}>Click Me 🦁 </button>


    </div>
  )
}

export default Home
