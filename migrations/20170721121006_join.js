exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('activity_locations', function (table) {
    table.integer('location_id')
    table.integer('activity_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('activity_locations')
}
