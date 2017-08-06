const mongodbUser = 'SwarajG';
const mongodbPWd = 'Girlsrhell20';
const mongodbDataBase = 'upandup';
const mongodbConnection = 'ds121212.mlab.com:21212';
module.exports = {
  mongodbUrl: `mongodb://${mongodbUser}:${mongodbPWd}@${mongodbConnection}/${mongodbDataBase}`,
}
