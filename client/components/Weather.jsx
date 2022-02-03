import React, { useEffect, useState } from 'react'
import { getWeather } from './weatherAPI'

function Weather () {
  console.log('Weather is rendered')

  const [weather, setWeather] = useState([])

  useEffect(() =>
    getWeather()
      .then(apiRes => {
        setWeather(apiRes)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  , [])

  return (
    <div>
      <h1>{weather}</h1>
    </div>
  )
}

export default Weather