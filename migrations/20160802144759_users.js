exports.up = function (knex, Promise) {
  //empty to avoid breaking the migrations
  return knex.schema.createTableIfNotExists('activity', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('location_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('activity')
}
