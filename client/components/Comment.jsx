import React, { useState } from 'react'
import { addNewComment } from '../apiClient'

function Comment() {
  const [input, setInput] = useState({
    comment: '',
    author: ''
  })

  function handleChange(e) {
    console.log(input, e)
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  function handleSubmit() {
    console.log(`form handle Submmit:${input}`)
    addNewComment(input, 1)
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <form className='comment-form'>
      <input type='text' name="comment" value={input.comment} onChange={handleChange} placeholder="Add your travel recommendations here" />
      <input className='inpuauthor' type='text' name="author" value={input.author} onChange={handleChange} placeholder="Please add your name" />
      <button className='button' onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default Comment

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { addNewLanguage } from '../api'

// function Form () {
//   const [input, setInput] = useState('')
//   const navigate = useNavigate()

//   function handleChange (event) {
//     setInput(event.target.value)
//   }

//   function handleSubmit (event) {
//     event.preventDefault()

//     addNewLanguage(input)
//       .then(() => {
//         navigate('/')
//         return null
//       })
//       .catch(err => {
//         console.error(err)
//       })
//   }

//   return (
//     <form>
//       <input type='text' value={input} onChange={handleChange} />
//       <button onClick={handleSubmit}>Add</button>
//     </form>)
// }

// export default Form
