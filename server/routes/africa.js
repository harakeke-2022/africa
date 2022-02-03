const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  res.json('route is working')
})

router.get('/:id', (req, res) => {
  const countriesId = Number(req.params.id)

  db.getComments(countriesId)
    .then(comment => {
      return res.json(comment)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/:id', (req, res) => {
  const bodyData = req.body
  const countriesId = Number(req.params.id)
  const newComment = { ...bodyData, countriesId }

  db.addNewComment(newComment)
    .then((newComment) => {
      return res.json(newComment)
    })

    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
