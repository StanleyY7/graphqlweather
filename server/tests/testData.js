const expectedOutput = {
  id: 0,
  city: "City",
  cityName: "City Name",
  longitude: 10.1234,
  latitude: 20.5678,
  currentWeather: {
    status: "Clear",
    description: "Clear sky",
    temp: 25,
    tempHigh: 30,
    tempLow: 20,
    pressure: 1010,
    humidity: 60,
    windSpeed: 5,
  },
  sunrise: "7:15:27 AM",
  sunset: "8:08:04 PM",
};

module.exports = { expectedOutput };
