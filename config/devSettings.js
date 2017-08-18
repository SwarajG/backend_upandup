const mongodbDataBase = 'local';
const mongodbConnection = 'localhost:27017';

module.exports = {
  mongodbUrl: `mongodb://${mongodbConnection}/${mongodbDataBase}`,
  facebookAuth: {
    clientID: '261317427711640',
    clientSecret: '86dcb8bbf6d33ed5d153d195cb122fb8',
    callbackURL: 'http://localhost:8080/auth/facebook/callback',
  },
};
