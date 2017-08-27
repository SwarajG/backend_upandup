// node_modules
const express = require('express');
const graphQLHTTP = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');

// local requires
const schema = require('./schema');
const Config = require('./config');
const enums = require('./utils/enum');
const authHelper = require('./utils/authHelper');
const user = require('./model/user');

passport.use(new Strategy({
  usernameField: 'userName',
  passwordField: 'password',
  session: false,
}, (username, password, done) => {
  user.authenticate(username, password, done);
},
));

const config = Config();
const {
  serialize,
  generateToken,
  respond,
} = authHelper;
const app = express();
const authenticate = expressJwt({
  secret: enums.SESSIONSECRET,
});

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodbUrl);
const db = mongoose.connection;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors({ origin: Config().corsURL }));
app.post('/login', passport.authenticate(
  'local', {
    session: false,
    scope: [],
  }), serialize, generateToken, respond);
app.get('/me', authenticate, (req, res) => {
  res.status(200).json(req.user);
});
app.use('/graphql', cors({ origin: Config().corsURL }), graphQLHTTP({
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
