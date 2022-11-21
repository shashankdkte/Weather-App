const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const yargs = require("yargs");
console.log(yargs.argv._[0]);
const city = yargs.argv._[0];

// yargs.command({
//     command
// })
if (city) {
  geocode(city, (error, data) => {
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
}
