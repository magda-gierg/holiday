exports.seed = function (knex, Promise) {
  return knex('activity').del()
    .then(function () {
      return Promise.all([
        knex('activity').insert({id: 1, name: 'swimming'}),
        knex('activity').insert({id: 2, name: 'surfing'}),
        knex('activity').insert({id: 3, name: 'walking'}),
        knex('activity').insert({id: 4, name: 'Church Buildings'}),
        knex('activity').insert({id: 5, name: 'Rosegarden'}),
        knex('activity').insert({id: 6, name: 'sking'}),
        knex('activity').insert({id: 7, name: 'Army Museum'}),
        knex('activity').insert({id: 8, name: 'cafe'}),
        knex('activity').insert({id: 9, name: 'hiking'}),
        knex('activity').insert({id: 10, name: 'kayaking'}),
        knex('activity').insert({id: 11, name: 'Te Papa'}),
        knex('activity').insert({id: 12, name: 'Mt. Vic'}),
        knex('activity').insert({id: 13, name: 'snow boarding'}),
        knex('activity').insert({id: 14, name: 'Cable Car'})
      ]);
    });
};
