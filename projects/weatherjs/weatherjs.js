// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.zip);

// Init UI
const ui = new UI();

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const zip = document.getElementById('zip').value;

  // Updating the weather location
  weather.changeLocation(city, zip);
  // Saving location to local storage
  storage.setLocationData(city, zip);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}