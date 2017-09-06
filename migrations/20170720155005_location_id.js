exports.up = function (knex, Promise) {
  return knex.schema.table('location', function (table) {
    table.integer('weather_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('location', function (table) {
    table.dropColumn('weather_id')
  })
}
