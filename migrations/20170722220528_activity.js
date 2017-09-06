
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('activity', (table) => {
    table.increments('id')
    table.string('name')
  
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('activity')
}
