const { ApolloServer } = require("apollo-server");
const WeatherAPI = require("./datasource");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    weatherAPI: new WeatherAPI(),
  }),
  engine: {
    reportSchema: true,
    variant: "current",
  },
});

server.listen().then(({ url }) => {
  console.log(`Stan says go to ${url}`);
});
