// Init weather object
const weather = new Weather('Los Angeles', '90501');

weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));
// console.log(weather.getWeather());