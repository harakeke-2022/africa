import React, { useEffect, useState } from 'react'
import { getWeather } from './weatherAPI'

function Weather () {
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

  console.log('Weather is rendered')

  return (
    <div>
      <h1>i love potatoes</h1>
      <p>{weather.address}</p>
    </div>
  )
}

export default Weather
