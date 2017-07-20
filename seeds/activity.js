exports.seed = function (knex, Promise) {
  return knex('activity').del()
    .then(function () {
      return Promise.all([
        // citys activity
        // Gisbourne
        knex('activity').insert({id: 1, name: 'Harry Barker Reserve', location_id: 1}),
        // Whangarei
        knex('activity').insert({id: 2, name: 'Bay of Islands', location_id: 2}),
        // Blenheim
        knex('activity').insert({id: 3, name: 'Omaka Aviation Heritage Centre', location_id: 3}),
        // Wellington
        knex('activity').insert({id: 4, name: 'Church Buildings', location_id: 5}),
        // Christchurch
        knex('activity').insert({id: 5, name: 'Rosegarden', location_id: 6}),
        // Queenstown
        knex('activity').insert({id: 6, name: 'Sking', location_id: 7}),
        // Mt.Ruapehu
        // Waiouru
        knex('activity').insert({id: 7, name: 'Army Museum', location_id: 9}),
        // genral activity
        knex('activity').insert({id: 8, name: 'Cafe', location_id: 10}),
        knex('activity').insert({id: 9, name: 'Hiking', location_id: 10}),
        knex('activity').insert({id: 10, name: 'Kayaking', location_id: 10}),
        knex('activity').insert({id: 11, name: 'Te Papa', location_id: 4}),
        knex('activity').insert({id: 12, name: 'Mt. Vic', location_id: 4}),
        knex('activity').insert({id: 13, name: 'Snow Boarding', location_id: 8}),
        knex('activity').insert({id: 14, name: 'Cable Car', location_id: 4}),
        // Dunedin
      ]);
    });
};
