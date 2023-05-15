const { ApolloServer } = require("apollo-server");
const resolvers = require("../resolvers");
const typeDefs = require("../schema");
const WeatherAPI = require("../datasource");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: {
    WeatherAPI: new WeatherAPI(),
  },
  engine: {
    reportSchema: true,
    variant: "current",
  },
});

// This is needed as it stops the (Apollo) server after each test otherwise test/s will keep running as server always on
afterEach(async () => {
  await server.stop();
});

describe("Server running tests", () => {
  test("Server should run and display message", async () => {
    const { url } = await server.listen();
    expect(url).toBeDefined();
  });
});
