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


router.get('/form', function (req, res) {
res.render('form')
})

router.post('/myForm', function(req, res) {
  db.addUser(req.body, req.app.get('connection'))
    .then(function () {
      res.redirect('/')
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})




router.get('/weather/:id', function (req, res) {
  db.getLocations(req.params.id, req.app.get('connection'))
  .then(function (locations) {
    res.render('location', {locations: locations})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/locations/:id', function (req, res) {
  db.getActivities(req.params.id, req.app.get('connection'))
  .then(function (activities) {
    res.render('activities', {activities})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
