exports.seed = function (knex, Promise) {
  return knex('activity').del()
    .then(function () {
      return Promise.all([
        // citys activity
        // Gisbourne
        knex('activity').insert({id: 1, name: 'swimming', location_id: 1}),
        // Whangarei
        knex('activity').insert({id: 2, name: 'surfing', location_id: 3}),
        // Blenheim
        knex('activity').insert({id: 3, name: 'walking', location_id: 2}),
        // Wellington
        knex('activity').insert({id: 4, name: 'Church Buildings', location_id: 6}),
        // Christchurch
        knex('activity').insert({id: 5, name: 'Rosegarden', location_id: 6}),
        // Queenstown
        knex('activity').insert({id: 6, name: 'sking', location_id: 8}),
        // Mt.Ruapehu
        // Waiouru
        knex('activity').insert({id: 7, name: 'Army Museum', location_id: 9}),
        // genral activity
        knex('activity').insert({id: 8, name: 'cafe', location_id: 5}),
        knex('activity').insert({id: 9, name: 'hiking', location_id: 7}),
        knex('activity').insert({id: 10, name: 'kayaking', location_id: 1}),
        knex('activity').insert({id: 11, name: 'Te Papa', location_id: 4}),
        knex('activity').insert({id: 12, name: 'Mt. Vic', location_id: 4}),
        knex('activity').insert({id: 13, name: 'snow boarding', location_id: 8}),
        knex('activity').insert({id: 14, name: 'Cable Car', location_id: 4}),
        // Dunedin
      ]);
    });
};
