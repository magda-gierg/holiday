// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

  test('getWeather', function(t) {
    var expected = 3
    return db.getWeather(t.context.connection)
      .then(function (result) {
        var actual = result.length
        t.is(expected, actual)
      })
  })

  test('add activity', (t) => {
    var connection = t.context.connection
    return db.addActivity(1, {name: 'Harrison'}, connection)
      .then(function(activityId) {
        t.is(activityId[0], 15)
        return connection('activity')
          .where('id', activityId[0])
          .first()
          .then(function(activity) {
            t.is(activity.name, "Harrison")
          })
      })
  })



// test('getUsers gets all users', function (t) {
//   // One for each letter of the alphabet!
//   var expected = 26
//   return db.getUsers(t.context.connection)
//     .then(function (result) {
//       var actual = result.length
//       t.is(expected, actual)
//     })
// })
//
// test('getUsers gets a single user', function (t) {
//   var expected = 'Ambitious Aardvark'
//   return db.getUser(99901, t.context.connection)
//     .then(function (result) {
//       var actual = result[0].name
//       t.is(expected, actual)
//     })
// })
