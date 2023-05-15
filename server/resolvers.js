module.exports = {
  Query: {
    weather: (_, { city }, { dataSources }) =>
      dataSources.weatherAPI.getWeather({ city }),
  },
};
