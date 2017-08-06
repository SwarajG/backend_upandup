const devSettings = require('./devSettings');
const prodSettings = require('./prodSettings');

module.exports = () => {
  switch(process.env.NODE_ENV){
    case 'dev':
      return devSettings;

    case 'prod':
      return prodSettings;

    default:
      return devSettings;
  };
};
