exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('join', function (table) {
    table.integer('location_id')
    table.integer('activity_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('join')
}
