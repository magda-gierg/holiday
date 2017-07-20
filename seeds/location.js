   return knex('location').del()
    .then(function () {
      return Promise.all([
        // Sunny
        knex('location').insert({id: 1, name: 'Gisbourne'weather_id: 1}),
        knex('location').insert({id: 2, name: 'Whangarei'weather_id: 1}),
        knex('location').insert({id: 3, name: 'Blenheim'weather_id: 1}),
        // windy
        knex('location').insert({id: 4, name: 'Wellington'weather_id: 2}),
        knex('location').insert({id: 5, name: 'Dunedin' weather_id: 2}),
        knex('location').insert({id: 6, name: 'Christchurch'weather_id:2 }),
        //Snow
        knex('location').insert({id: 7, name: 'Queenstown'weather_id: 3}),
        knex('location').insert({id: 8, name: 'Mt.Ruapehu'weather_id: 3}),
        knex('location').insert({id: 9, name: 'Waiouru'weather_id: 3})
      ]);
    });
};
