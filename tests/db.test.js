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
