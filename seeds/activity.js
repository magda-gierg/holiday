exports.seed = function (knex, Promise) {
  return knex('activity').del()
    .then(function () {
      return Promise.all([
        knex('activity').insert({name: 'swimming'}),
        knex('activity').insert({name: 'surfing'}),
        knex('activity').insert({name: 'walking'}),
        knex('activity').insert({name: 'Church Buildings'}),
        knex('activity').insert({name: 'Rosegarden'}),
        knex('activity').insert({name: 'sking'}),
        knex('activity').insert({name: 'Army Museum'}),
        knex('activity').insert({name: 'cafe'}),
        knex('activity').insert({name: 'hiking'}),
        knex('activity').insert({name: 'kayaking'}),
        knex('activity').insert({name: 'Te Papa'}),
        knex('activity').insert({name: 'Mt. Vic'}),
        knex('activity').insert({name: 'snow boarding'}),
        knex('activity').insert({name: 'Cable Car'})
      ]);
    });
};
