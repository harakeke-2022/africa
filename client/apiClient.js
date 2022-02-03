import request from 'superagent'

export function getWeather () {
  return request.get('/api/v1/africa/:id')
    .then(res => res.body)
}

export function addNewComment (input) {
  return request.post('/api/v1/africa/:id')
  .send({ author: input,
  comment: input })
  .then(() => {
    return null
  })
