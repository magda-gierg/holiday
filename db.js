
module.exports = {
  getWeather: getWeather,
  getLocations: getLocations,
  getActivities: getActivities,
  addActivity: addActivity
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
  return connection('activity').where('activity.id', id)
  .join('location', 'activity.location_id', '=', 'location.id', 'activity.name as activity_name')
}

function addActivity (body, connection) {
  var newActivity= {name: body.name}
  return  connection('activities').insert(newActivity)
}
