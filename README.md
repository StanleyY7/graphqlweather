# GraphQL Weather API

An Open Weather API wrapped in a GraphQL Wrapper and served live so that users can make requests to it.

Retrieve the current weather for any given city. Since this GraphQL API uses the free-tier of the Open Weather Map API, it is restricted to 60 calls/minute.

Live version is available from this URL: https://weather-graphql.onrender.com/

![image](https://github.com/StanleyY7/graphqlweather/assets/119549394/4def042d-9552-4d13-b4f4-9fdae2a382dc)

### Overview/Purpose:

The main reason for creating this is due to working on my own weather app I wanted to use a GraphQL Weather API. Upon searching I found this popular one: (https://github.com/konstantinmuenster/graphql-weather-api) however it no longer works as it is served over Heroku (I assume it runs on Heroku free tier which has been depracated so no longer being hosted). So I looked up guides/documents online and created my own GraphQL version/wrapper of the Open Weather Rest API.

### How to Use

- TBD

### Build Steps

      npm install
      node server
      
The server starts at http://localhost:4000/

For dev environment follow the comments/steps on .example file and server/datasource.js.

Tech Stack
- NodeJs
- Apollo Server
- GraphQL
- JavaScript

