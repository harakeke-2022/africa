import React, { useState } from 'react'
import { addNewComment } from '../apiClient'

function Comment () {
  const [input, setInput] = useState('')

  function handleChange (event) {
    setInput(event.taget.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    addNewComment(input)
      .then(() => {
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }
  return (
    <comment>
      <input type='text' value={input} onChange={handleChange} />
      <button onClick= {handleSubmit}>Add</button>
    </comment>
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
