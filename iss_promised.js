const request = require('request-promise-native');

const fetchMyIP = () => request('https://api.ipify.org?format=json');

const fetchCoordsByIP = ip => {
  const ipStr = JSON.parse(ip).ip;
  return request(`http://ipwho.is/${ipStr}`);
};

const fetchISSFlyOverTimes = coords => {
  const coordsObj = {};
  coordsObj.latitude = JSON.parse(coords).latitude;
  coordsObj.longitude = JSON.parse(coords).longitude;
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coordsObj.latitude}&lon=${coordsObj.longitude}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(ip => fetchCoordsByIP(ip))
    .then(coords => fetchISSFlyOverTimes(coords))
    .then(times => JSON.parse(times).response);
};


module.exports = { nextISSTimesForMyLocation };