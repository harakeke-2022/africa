import React from 'react'
import Weather from './Weather'

function Country () {
  console.log('country is rendered')

  return (

    <>
      <Weather />
      < h1>{Weather.body}</h1>
    </>

  )
}

export default Country
