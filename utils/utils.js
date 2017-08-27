const customEnum = require('./enum');
const FlakeIdGen = require('flake-idgen');
const intformat = require('biguint-format');

const generator = new FlakeIdGen();

const encode = require('object-hash');

module.exports = {
  getUniqueId: () => intformat(generator.next(), 'dec'),
  securePassword: password => encode(`${password}${customEnum.PASSWORDSALT}`),
};
