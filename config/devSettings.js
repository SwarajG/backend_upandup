const mongodbDataBase = 'local';
const mongodbConnection = 'localhost:27017';

module.exports = {
  mongodbUrl: `mongodb://${mongodbConnection}/${mongodbDataBase}`,
}
