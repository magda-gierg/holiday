exports.seed = function (knex, Promise) {
  return knex('weather').del()
    .then(function () {
      return Promise.all([
        knex('weather').insert({id: 1, name: 'Sunny'}),
        knex('weather').insert({id: 2, name: 'wind'}),
        knex('weather').insert({id: 3, name: 'Snow'})
      ]);
    });
};
