exports.up = function (knex) {
  return knex.schema.createTable('Countries', (table) => {
    table.increments().primary()
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Countries')
}
