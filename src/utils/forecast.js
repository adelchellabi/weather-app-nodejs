const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=4b7032b4242b43a9b05db1c63cfd760b&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const { current: data } = body;
      const message = `${data.weather_descriptions[0]}. It is currently ${data.temperature} degress out. It feels like ${data.feelslike} degress out. The humidity is ${data.humidity}%`;
      callback(undefined, message);
    }
  });
};
module.exports = forecast;
