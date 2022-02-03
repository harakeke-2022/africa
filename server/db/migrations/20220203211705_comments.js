exports.up = function (knex) {
  return knex.schema.createTable('Comments', (table) => {
    table.increments().primary()
    table.integer('Countries_id').references('Countries.id')
    table.string('comment')
    table.string('author')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Comments')
}
