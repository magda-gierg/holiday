
module.exports = {
  getUser: getUser,
  getWeather: getWeather
}

function getWeather (connection) {
  return connection('weather').select()
}

function getLocation (id, connection) {
  return connection('weather').where('weather.id', id)
  .join('location', 'weather.location_id', '=', 'location.id')
}
