const mongoose = require('mongoose');
const utils = require('../utils/utils');

const addressSchema = mongoose.Schema({
  addressId: String,
  uid: String,
  locality: String,
  pincode: Number,
});

const Address = mongoose.model('Address', addressSchema);

module.exports = {
  // Mutations
  create: (newAddress) => {
    const addressId = {
      addressId: utils.getUniqueId(),
    };
    const address = new Address(Object.assign(newAddress, addressId));
    const promise = new Promise((resolve, reject) => {
      address.save((err, dbAddress) => {
        if (err) reject(err);
        resolve(dbAddress);
      });
    });
    return promise;
  },
  delete: (addressId) => {
    const promise = new Promise((resolve, reject) => {
      Address.find({ addressId }).remove((err) => {
        if (err) reject(err);
        resolve('address deleted');
      });
    });
    return promise;
  },
  updateAddressWithAddressId: (addressId, updatedAddress) => {
    const promise = new Promise((resolve, reject) => {
      Address.findOneAndUpdate({ addressId }, updatedAddress, (err, dbAddress) => {
        if (err) reject(err);
        resolve(dbAddress);
      });
    });
    return promise;
  },
  // Queries
  getAddressByAddressId: (addressId) => {
    const promise = new Promise((resolve, reject) => {
      Address.find({ addressId }, (err, address) => {
        if (err) reject(err);
        resolve(address[0]);
      });
    });
    return promise;
  },
  getAddressByUID: (uid) => {
    const promise = new Promise((resolve, reject) => {
      Address.findOne({ uid }, (err, address) => {
        if (err) reject(err);
        resolve(address);
      });
    });
    return promise;
  },
  getAllAddresses: () => {
    const promise = new Promise((resolve, reject) => {
      Address.find({}, (err, addresses) => {
        if (err) reject(err);
        resolve(addresses);
      });
    });
    return promise;
  },
};
