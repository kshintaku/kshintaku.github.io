class Weather {
  constructor(city, zip) {
    this.apiKey = '528bf05fa50048a8f39bc268cad5012e';
    this.city = city;
    this.zip = zip;
  }


  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${this.city}&APPID=${this.apiKey}`, {method: 'GET', redirect: 'follow', mode: 'cors'});

    const responseData = await response.json();

    console.log(responseData);

    // return responseData.weather;
  }

  // Change weather location
  changeLocation(city, zip) {
    this.city = city;
    this.zip = zip;
  }
}