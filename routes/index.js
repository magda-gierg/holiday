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
  // res.send('hello')
})


router.get('/locations/newactivity/:location_id', function (req, res) {
res.render('form', {id: req.params.location_id})
})

router.post('/locations/newactivity/:location_id', function(req, res) {
  var id = req.params.location_id
  db.addActivity(id, req.body, req.app.get('connection'))
    .then(function () {
      res.redirect('/locations/' + id)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/weather/:weather_id', function (req, res) {
  db.getLocations(req.params.weather_id, req.app.get('connection'))
  .then(function (locations) {
    res.render('location', {locations: locations})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/locations/:location_id', function (req, res) {
  db.getActivities(req.params.location_id, req.app.get('connection'))
  .then(function (activities) {
    console.log(activities)
    res.render('activities', {id: req.params.location_id, name: activities[0].name, activities: activities})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})
router.get('/activities/:acti2vity_id', function (req, res) {

  db.locationByActivity(req.params.activity_id, req.app.get('connection'))
  .then(function(loctivities) {
    console.log(loctivities);
    res.render('places', {id: req.params.id, location_name: loctivities[0] ? loctivities[0].activity_name : 'name', loctivities: loctivities})
  })
  .catch(function (err) {
    console.log({err});
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// router.get('/activities/:activity_id', function (req, res) {
//   db.getPlaces(req.params.activity_id, req.app.get('connection'))
//   .then(function (locations) {
//     console.log({locations});
//     res.render('places', {id: req.params.id, activity_name: locations[0] ? locations[0].activity_name : 'name', locations:locations})
//   })
//   .catch(function (err) {
//     console.log({err});
//     res.status(500).send('DATABASE ERROR: ' + err.message)
//   })
// })


module.exports = router
