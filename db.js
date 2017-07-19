
module.exports = {
  getUser: getUser,
  getWeather: getWeather
}

function getWeather (connection) {
  return connection('weather').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}
