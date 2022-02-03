exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('Comments').insert([
        { id: 1, Countries_id: 1, comment: 'Table mountain is Amazing!!', author: 'Jinny' },
        { id: 2, Countries_id: 1, comment: 'You can swim with penguins at Borders Beach!', author: 'Mike' },
        { id: 3, Countries_id: 1, comment: 'Biltong is great for snack', author: 'Andrew' }
      ])
    })
}
