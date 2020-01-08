class Weather {
  constructor(city, state, zip) {
    this.apiKey = '528bf05fa50048a8f39bc268cad5012e';
    this.city = city;
    this.state = state;
    this.zip = zip;
  }


  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.weather;
  }

  // Change weather location
  changeLocation(city, state, zip) {
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}