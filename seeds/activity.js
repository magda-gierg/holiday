exports.seed = function (knex, Promise) {
  return knex('activity').del()
    .then(function () {
      return Promise.all([
        // citys activity
        // Gisbourne
        knex('activity').insert({id: 1, name: 'swimming'}),
        // Whangarei
        knex('activity').insert({id: 2, name: 'surfing'}),
        // Blenheim
        knex('activity').insert({id: 3, name: 'walking'}),
        // Wellington
        knex('activity').insert({id: 4, name: 'Church Buildings'}),
        // Christchurch
        knex('activity').insert({id: 5, name: 'Rosegarden'}),
        // Queenstown
        knex('activity').insert({id: 6, name: 'sking'}),
        // Mt.Ruapehu
        // Waiouru
        knex('activity').insert({id: 7, name: 'Army Museum'}),
        // genral activity
        knex('activity').insert({id: 8, name: 'cafe'}),
        knex('activity').insert({id: 9, name: 'hiking'}),
        knex('activity').insert({id: 10, name: 'kayaking'}),
        knex('activity').insert({id: 11, name: 'Te Papa'}),
        knex('activity').insert({id: 12, name: 'Mt. Vic'}),
        knex('activity').insert({id: 13, name: 'snow boarding'}),
        knex('activity').insert({id: 14, name: 'Cable Car'})
        // Dunedin
      ]);
    });
};
