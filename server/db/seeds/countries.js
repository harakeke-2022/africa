exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('Countries').insert([
        { id: 1, name: 'South Africa' },
        { id: 2, name: 'Kenya' },
        { id: 3, name: 'Nambia' }
      ])
    })
}
