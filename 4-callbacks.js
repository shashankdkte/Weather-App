const geocode = (address, callback) => {
  const data = {
    latitude: 0,
    longitude: 0,
  };
  return data;
};

const geocode1 = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    return data;
  }, 2000);
};
const geocode2 = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};
//const data = geocode("phil");
//onst data = geocode1("phil");

geocode2("phil", (data) => {
  console.log(data);
});
// console.log(data);

const add = (num1, num2, callback) => {
  setTimeout(() => {
    callback(num1 + num2);
  }, 2000);
};

add(1, 5, (sum) => {
  console.log(sum);
});
