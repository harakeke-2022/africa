const config = require('./knexfile').development
const connection = require('knex')(config)

function getComments (countriesId, db = connection) {
  return db('Comments')
    .where('Countries_id', countriesId)
    .select()
}

function addNewComment (newComment, db = connection) {
  const { comment, author, countriesId } = newComment
  return db('Comments')
    .where('countries_id', countriesId)
    .insert({ comment, author, countries_Id: countriesId })
}

module.exports = {
  getComments,
  addNewComment
}
