// node_modules
const express = require('express');
const graphQLHTTP = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');

// local requires
const schema = require('./schema');
const Config = require('./config');

const config = Config();
const app = express();

mongoose.connect(config.mongodbUrl);
const db = mongoose.connection;

app.use(express.static('public'));
app.use('/graphql', cors(), graphQLHTTP({
  schema,
  graphiql: true,
}));

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
});
