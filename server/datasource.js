const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

// For dev environment uncomment the below API_KEY variable
// const API_KEY = require("../secrets");

class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://api.openweathermap.org/data/2.5/weather";
  }

  //main fetch call for weather query
  async getWeather({ city }) {
    const response = await this.get(`?q=${city}&appid=${process.env.API_KEY}`); // for dev environment change process.env.API_KEY to API_KEY
    return this.weatherReducer(response, city);
  }
  // async call will pass data to this reducer, which will return the data
  // mapped to GraphQL schema
  weatherReducer(weather, city) {
    const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();
    return {
      id: weather.id || 0,
      city: city,
      cityName: weather.name,
      longitude: weather.coord.lon,
      latitude: weather.coord.lat,
      currentWeather: {
        status: weather.weather[0].main,
        description: weather.weather[0].description,
        temp: weather.main.temp,
        tempHigh: weather.main.temp_max,
        tempLow: weather.main.temp_min,
        pressure: weather.main.pressure,
        humidity: weather.main.humidity,
        windSpeed: weather.wind.speed,
      },
      sunrise,
      sunset,
    };
  }
}

module.exports = WeatherAPI;
