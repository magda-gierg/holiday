var test = require('ava')
var request = require('supertest')
var cheerio = require('cheerio')

var createServer = require('../server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('GET /', (t) => {
  return request(t.context.app)
  .get('/')
  .expect(302)
  .then((res) => {
    t.pass()
  })

})

test('GET /weather', (t) => {
  return request(t.context.app)
  .get('/weather')
  .expect(200)
  .then((res) => {
    const $ = cheerio.load(res.text)
    t.is($('h1').first().text(),'Are you ready for holidays?')
  })
})

test('POST /locations/newactivity/:location_id', (t) => {
  var actualName = "running"
  var actualLocationId = 1
  return request(t.context.app)
  .post('/locations/newactivity/' + actualLocationId)
  .expect(302)
  .send({
    name: actualName
  })
  .then((res) => {
    var db = t.context.connection
    return db('activity')
    .then(function(activities) {
      t.is(activities.length, 15, 'adds an additional activity')
      return db('activity')
      .where('id', 15)
      .then(function(activity) {
        t.is(activity[0].name, actualName)
        t.is(activity[0].location_id, actualLocationId)
      })
    })
  })
})
