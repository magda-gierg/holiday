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
      t.is($('li').first().text(), 'beach')
    })

})
