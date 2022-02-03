import React, { useEffect, useState } from 'react'
import { getWeather } from './weatherApi'

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

// import React, { useEffect, useState } from 'react'
// import { fetchLanguages } from '../api'

// function List () {
//   console.log('list is rendered')

//   const [langs, setLangs] = useState([])

//   useEffect(() => {
//     fetchLanguages()
//       .then(apiResponse => {
//         setLangs(apiResponse)
//         return null
//       })
//       .catch(err => {
//         console.error(err)
//       })
//   }, [])

//   return (<section>
//     <ul>
//       {langs.map(lang =>
//         <li key={lang.id}>{lang.name}</li>
//       )}
//     </ul>
//   </section>)
// }

// export default List
