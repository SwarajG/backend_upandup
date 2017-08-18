const mongodbUser = 'SwarajG';
const mongodbPWd = 'Girlsrhell20';
const mongodbDataBase = 'upandup';
const mongodbConnection = 'ds121212.mlab.com:21212';
module.exports = {
  mongodbUrl: `mongodb://${mongodbUser}:${mongodbPWd}@${mongodbConnection}/${mongodbDataBase}`,
  facebookAuth: {
    clientID: '261317427711640',
    clientSecret: '86dcb8bbf6d33ed5d153d195cb122fb8',
    callbackURL: 'http://localhost:8080/auth/facebook/callback',
  },
};
