import React, { useState, useEffect } from 'react'
import Weather from './Weather'

import { getComments, addNewComment } from '../apiClient'

function Country (props) {
  console.log('country is rendered')

  console.log('country props ::', props)

  const [data, setData] = useState([])

  useEffect(() => {
    console.log('using the effect')
    getComments(1) // hardcording we need to change for id data
      .then(resApi => {
        setData(resApi)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  console.log(data)

  return (

    <>
      <Weather />
      <h1>{Weather.body}</h1>
      <ul className="comments">

        {data.map(item => {
          return (
            <li key = 'comment' className="comment-li">
              <span className='comment'>{item.comment}</span>
              <span className='author'>{item.author}</span>
            </li>
          )
        })}

      </ul>
    </>

  )
}

export default Country
