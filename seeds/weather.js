exports.seed = function (knex, Promise) {
  return knex('weather').del()
    .then(function () {
      return Promise.all([
        knex('weather').insert({id: 1, name: 'sunny'}),
        knex('weather').insert({id: 2, name: 'windy'}),
        knex('weather').insert({id: 3, name: 'snow'})
      ]);
    });
};
