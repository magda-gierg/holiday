exports.seed = function (knex, Promise) {
  return knex('weather').del()
    .then(function () {
      return Promise.all([
        knex('weather').insert({id: 1, name: 'Sunny', location_id: 1}),
        knex('weather').insert({id: 2, name: 'wind', location_id: 2}),
        knex('weather').insert({id: 3, name: 'Snow', location_id: 3})
      ]);
    });
};
