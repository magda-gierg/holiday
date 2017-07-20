exports.seed = function (knex, Promise) {
  return knex('location').del()
    .then(function () {
      return Promise.all([
        // Sunny
        knex('location').insert({id: 1, name: 'Gisbourne',activity_id:1}),
        knex('location').insert({id: 2, name: 'Whangarei',activity_id:2}),
        knex('location').insert({id: 3, name: 'Blenheim',activity_id:3}),
        // windy
        knex('location').insert({id: 4, name: 'Wellington',activity_id:4}),
        knex('location').insert({id: 5, name: 'Dunedin',activity_id:5}),
        knex('location').insert({id: 6, name: 'Christchurch',activity_id:6}),
        //Snow
        knex('location').insert({id: 7, name: 'Queenstown',activity_id:7}),
        knex('location').insert({id: 8, name: 'Mt.Ruapehu',activity_id:8}),
        knex('location').insert({id: 9, name: 'Waiouru',activity_id:9})
      ]);
    });
};
