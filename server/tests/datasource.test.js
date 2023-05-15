const { RESTDataSource } = require("apollo-datasource-rest");
let WeatherAPI = require("../datasource");
const { expectedOutput } = require("./testData");

jest.mock("apollo-datasource-rest");

describe("Datasource Fetch Tests", () => {
  beforeEach(() => {
    WeatherAPI = new WeatherAPI();
  });

  test("It should fetch data from the Open Weather Rest API and map it as GraphQL", async () => {
    WeatherAPI.get = jest.fn().mockResolvedValueOnce({
      sys: {
        sunrise: 1621149327,
        sunset: 1621195684,
      },
      name: "City Name",
      coord: {
        lon: 10.1234,
        lat: 20.5678,
      },
      weather: [
        {
          main: "Clear",
          description: "Clear sky",
        },
      ],
      main: {
        temp: 25,
        temp_max: 30,
        temp_min: 20,
        pressure: 1010,
        humidity: 60,
      },
      wind: {
        speed: 5,
      },
    });

    const result = await WeatherAPI.getWeather({ city: "City" });
    expect(result).toEqual(expectedOutput);
  });
});
