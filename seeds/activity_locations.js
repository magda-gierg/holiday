exports.seed = function (knex, Promise) {
  return knex('activity_locations').del()
    .then(function () {
      return Promise.all([
        // citys activity
        // Gisbourne
        knex('activity_locations').insert({activity_id: 1, location_id: 1}),
        // Whangarei
        knex('activity_locations').insert({activity_id: 2,location_id: 2}),
          knex('activity_locations').insert({activity_id: 2,location_id: 1}),
        // Blenheim
        knex('activity_locations').insert({activity_id: 3, location_id: 2}),
        // Wellington
        knex('activity_locations').insert({activity_id: 4, location_id: 6}),
        // Christchurch
        knex('activity_locations').insert({activity_id: 5, location_id: 6}),
        // Queenstown
        knex('activity_locations').insert({activity_id: 6, location_id: 8}),
        // Mt.Ruapehu
        // Waiouru
        knex('activity_locations').insert({activity_id: 7, location_id: 9}),
        // genral activity
        knex('activity_locations').insert({activity_id: 8,location_id: 5}),
        knex('activity_locations').insert({activity_id: 9, location_id: 7}),
        knex('activity_locations').insert({activity_id: 10, location_id: 1}),
        knex('activity_locations').insert({activity_id: 11, location_id: 4}),
        knex('activity_locations').insert({activity_id: 12, location_id: 4}),
        knex('activity_locations').insert({activity_id: 13, location_id: 8}),
        knex('activity_locations').insert({activity_id: 14, location_id: 4})
        // Dunedin
      ]);
    });
};
