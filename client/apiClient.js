import request from 'superagent'

export function getComments (id) {
  return request
    .get(`/api/v1/africa/${id}`)
    .then(res => res.body)
}


export function addNewComment(input, id) {
  return request
    .post(`/api/v1/africa/${id}`)
    .send({
      author: input.author,
      comment: input.comment
    }

    )
    .then(() => {
      return null
    })
}
