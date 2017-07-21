exports.seed = function (knex, Promise) {
  return knex('weather').del()
    .then(function () {
      return Promise.all([
        knex('weather').insert({id: 1, name: 'beach'}),
        knex('weather').insert({id: 2, name: 'cities'}),
        knex('weather').insert({id: 3, name: 'mountains'})
      ]);
    });
};
