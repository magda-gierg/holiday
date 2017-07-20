exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('location', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.integer('activity_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('location')
}
