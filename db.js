
module.exports = {
  getWeather: getWeather,
  getLocations: getLocations,
  getActivities: getActivities,
  addActivity: addActivity,
  getPlaces: getPlaces,
  locationByActivity: locationByActivity
}

function getWeather (connection) {
  return connection('weather').select()
}

function getLocations (id, connection) {
  return connection('weather')
    .where('weather.id', id)
    .join('location', 'weather.id', '=', 'location.weather_id')
    .select('*', 'location.id as location_id')
}

function getActivities (id, connection) {
  return connection('activity')
  .where('activity.location_id', id)
  .join('location', 'activity.location_id', '=', 'location.id')
  .select('*', 'activity.id as id','activity.name as activity_name')
}

function addActivity (id, body, connection) {
  var newActivity= {name: body.name, location_id: id}
  return  connection('activity').insert(newActivity)
}

function getPlaces (location_id, connection) {
  return connection('activity')
    .where('location.id', location_id)
    .join('location', 'activity.location_id', 'location.id')
    .select('*', 'location.name as location_name', 'location.id as location_id', 'activity.name as activity_name')
}

function locationByActivity(activity_id, connection) {
  console.log(activity_id)
  return connection('location')
  .join('activity_locations', 'activity_locations.location_id', 'location.id')
  .where('activity_locations.activity_id', activity_id)

}
