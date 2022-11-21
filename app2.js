const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=6381d12dc84f211c9ad933be49bd06f1&query=37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  //console.log(response.body.current);
  console.log(response.body.current.temperature);
  console.log(response.body.current.weather_descriptions[0]);
});
