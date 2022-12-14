const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoic2hhc2hhbmtka3RlIiwiYSI6ImNsYXI3cHgyYTFuZ2gzeG42OWJtMjAzYXoifQ.P_tOfYnUUKpvjX8RkTGBoQ";

  request({ url: url, json: true }, (error, response) => {
    //console.log(response.body.current);
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search ", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

geocode("New York", (error, data) => {
  console.log(error);
  console.log(data);
});
