var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req, res) => {
  res.redirect('/weather')
})

router.get('/weather', function (req, res) {
  db.getWeather(req.app.get('connection'))
    .then(function (weather) {
      res.render('index', { weather: weather })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  // res.send('hello')
})

router.get('/weather/:id', function (req, res) {
  db.getLocation(req.params.id, req.app.get('connection'))
  .then(function (weather) {
    res.render('location', weather[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/locations/:id', function (req, res) {
  db.getActivity(req.params.id, req.app.get('connection'))
  .then(function (activity) {
    res.render('activities', activity[0])
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})



module.exports = router
