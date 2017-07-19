var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  // db.getWeather(req.app.get('connection'))
  //   .then(function (weather) {
  //     res.render('index', { weather: weather })
  //   })
  //   .catch(function (err) {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
  res.send('hello')
})

module.exports = router
