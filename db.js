
module.exports = {
  getWeather: getWeather,
  getLocation: getLocation,
  getActivity: getActivity
}

function getWeather (connection) {
  return connection('weather').select()
}

function getLocation (id, connection) {
  return connection('weather').where('weather.id', id)
  .join('location', 'weather.location_id', '=', 'location.id')
}

function getActivity (id, connection) {
  return connection('activity').where('activity.id', id)
  .join('activity', 'location.activity_id', '=', 'activity.id')
}
