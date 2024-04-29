
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();
const connectDB = require('./config/db'); 
const schema = require('./Schema/schema');
const port = process.env.PORT || 5000;

const app = express();

connectDB();
app.use(cors());
const server = new ApolloServer({
  schema, 
  context: ({ req }) => {
    return {
      auth: req.headers.authorization || '',
    };
  },
});

server.start().then(() => {
  server.applyMiddleware({
    app, 
    path: '/graphql',
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}${server.graphqlPath}`); 
  });
});