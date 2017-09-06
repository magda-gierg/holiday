module.exports = {
  getWeather: getWeather,
  getLocations: getLocations,
  getActivities: getActivities,
  addActivity: addActivity,
  locationsByActivity: locationsByActivity
}

function getWeather (connection) {
  return connection('weather').select()
}

function getLocations (id, connection) {
  return connection('weather').where('weather.id', id)
  .join('location', 'weather.id', '=', 'location.weather_id')
  .select('*', 'location.id as location_id')
}

function getActivities (id, connection) {
  return connection('activity')
  .join('activity_locations', 'activity_locations.activity_id', 'activity.id')
  .join('location', 'location.id', 'activity_locations.location_id')
  .where('location.id',id)
  .select('*', 'activity.name as activity_name', 'activity.id as activity_id')
}

function addActivity (id, body, connection) {
  var newActivity= {name: body.name}
  return connection('activity').insert(newActivity)
  .then(function(activity) {
    var newActivityLocation= {location_id: id, activity_id: activity[0]}
    return connection('activity_locations').insert(newActivityLocation)
  })
}

function locationsByActivity(id, connection) {
  return connection('location')
  .join('activity_locations', 'activity_locations.location_id', 'location.id')
  .join('activity', 'activity.id', 'activity_locations.activity_id')
  .where('activity.id',id)
  .select('*', 'location.name as location_name', 'location.id as location_id')
}
