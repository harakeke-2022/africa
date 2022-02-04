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

  if (weather.length < 1) {
    return (<><span>Loading</span></>)
  } else {
    return (

      <>
        <h1>Current weather in {weather.resolvedAddress}</h1>
        
        <ul className='weather-box'>
          <li>Weather description: {weather.description}</li>
          <li>Weather timezone: {weather.timezone}</li>
          <li>Date: {weather.days[0].datetime}</li>
          <li>Current temp: {weather.days[0].temp}</li>
          <li>Temp min: {weather.days[0].tempmin} Temp max: {weather.days[0].tempmax} </li>
          <li>Humidity: {weather.days[0].humidity} Rain: {weather.days[0].precip}</li>
        </ul>
      </>
    )
  }
}

export default Weather
