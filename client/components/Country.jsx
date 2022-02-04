import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import Comment from './Comment'

import { getComments } from '../apiClient'

function Country(props) {
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

    <section className='country-main'>
      <Weather />


      < h1>{Weather.body}</h1>
      <Comment />

      <ul className="comments">
        <span className='minititle'>🎉Recommendations </span>
        {data.map(item => {
          return (
            <li key='comment' className="comment-li">
              <span className='comment'><b>{item.comment}</b></span>
              <span className='author'> from {item.author}</span>
            </li>
          )
        })}

      </ul>
    </section>

  )
}

export default Country
