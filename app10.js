const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
geocode("New Delhi", (error, data) => {
  if (error) {
    return console.log(error);
  }
  forecast(data.latitude, data.longitude, (error, forecastdata) => {
    if (error) {
      return;
    }
    console.log(data.location);
    console.log(forecastdata);
  });
});
