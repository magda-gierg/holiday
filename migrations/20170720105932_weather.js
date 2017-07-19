exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('weather', function (table) {
    table.increments('id').primary()
    table.string('name')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('weather')
}
