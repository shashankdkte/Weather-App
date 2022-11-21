const request = require("request");
const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hhc2hhbmtka3RlIiwiYSI6ImNsYXI3cHgyYTFuZ2gzeG42OWJtMjAzYXoifQ.P_tOfYnUUKpvjX8RkTGBoQ";

request({ url: url, json: true }, (error, response) => {
  //console.log(response.body.current);
  if (error) {
    console.log("Unable to connect to location service");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location");
  } else {
    console.log(response.body.features[0].center);
  }
});
