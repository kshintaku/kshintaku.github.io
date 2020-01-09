class Storage {
  constructor() {
    this.city;
    this.zip;
    this.defaultCity = 'Los Angeles';
    this.defaultZip = '90501';
  }

  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('zip') === null) {
      this.zip = this.defaultZip;
    } else {
      this.zip = localStorage.getItem('zip');
    }

    return {
      city: this.city,
      zip: this.zip
    }
  }

  setLocationData(city, zip) {
    localStorage.setItem('city', city);
    localStorage.setItem('zip', zip);
  }
}