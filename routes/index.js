var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req, res) => {
  res.redirect('/weather')
})

router.get('/weather', function (req, res) {
  db.getWeather(req.app.get('connection'))
  .then(function (weatherArray) {
    res.render('index', { keyArray: weatherArray })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})


router.get('/locations/newactivity/:id', function (req, res) {
  res.render('form', {id: req.params.id})
})

router.post('/locations/newactivity/:id', function(req, res) {
  var id = req.params.id
  console.log(req.body);
  db.addActivity(id, req.body, req.app.get('connection'))
  .then(function (response) {
    console.log({response});
    res.redirect('/locations/' + id)
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
    res.render('activities', {id: req.params.id, name: activities[0].name, activities: activities})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})


router.get('/activity/:id', function (req, res) {
  db.locationsByActivity(req.params.id, req.app.get('connection'))
  .then(function (locations) {
    res.render('places', {id: req.params.id, name: locations[0].name, locations: locations})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
