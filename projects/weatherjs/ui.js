class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.sunset = document.getElementById('w-sunset');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp.toFixed(0)} \xB0 F`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.sunset.textContent = `Sunset:  ${new Date(weather.sys.sunset * 1000).toLocaleTimeString()}`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like.toFixed(0)}  \xB0 F`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed.toFixed(0)} MPH`;
  }
}