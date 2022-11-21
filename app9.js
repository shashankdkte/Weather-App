const forecast = require("./utils/forecast");
forecast(44.1545, -75.7088, (error, data) => {
  console.log(error);
  console.log(data);
});
