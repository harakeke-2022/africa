import React, {useState, useEffect} from 'react'
import { getWeather } from './weatherAPI'

const App = () => {

  const [weather, setWeather] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    getGreeting()
      .then((weather) => {
        console.log(weather)
        setWeather(weather)
      })
  }, [])

  return (
    <>
 <ul>
   <li></li>
 </ul>
    </>
  )
}

export default App
