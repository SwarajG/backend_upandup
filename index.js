const express = require('express');
const graphQLHTTP = require('express-graphql');
const schema = require('./schema');

const db = require('./db');
const model = require('./model');
const cors = require('cors');
const Config = require('./config');
const config = Config();

const app = express();

app.use(express.static('public'))
app.get('/test', (req, res) => {
  model.getAllUsers().then((response) => res.send(response));
});

app.use('/graphql', cors(), graphQLHTTP({
  schema,
  graphiql: true,
}));

db.connect(config.mongodbUrl, (err) => {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } else {
    app.listen(process.env.PORT || 5000, function() {
      console.log(`Listening on port ${process.env.PORT}...`);
    });
  }
});
