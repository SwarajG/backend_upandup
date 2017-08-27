const mongoose = require('mongoose');
const utils = require('../utils/utils');

const outletSchema = mongoose.Schema({
  menuItemId: String,
  name: String,
  price: Number,
  picture: String,
  description: String,
  status: String,
  categoryId: String,
});

const Outlet = mongoose.model('Outlet', outletSchema);

module.exports = {
  // Mutation
  create: (newOutlet) => {
    const outletId = {
      outletId: utils.getUniqueId(),
    };
    const outlet = new Outlet(Object.assign(newOutlet, outletId));
    const promise = new Promise((resolve, reject) => {
      outlet.save((err, dbOutlet) => {
        if (err) reject(err);
        resolve(dbOutlet);
      });
    });
    return promise;
  },
  update: (outletId, updatedOutlet) => {
    const promise = new Promise((resolve, reject) => {
      Outlet.findOneAndUpdate({ outletId }, updatedOutlet, (err, dbOutlet) => {
        if (err) reject(err);
        resolve(dbOutlet);
      });
    });
    return promise;
  },
  delete: (outletId) => {
    const promise = new Promise((resolve, reject) => {
      Outlet.find({ outletId }).remove((err) => {
        if (err) reject(err);
        resolve('outlet deleted');
      });
    });
    return promise;
  },
  // Quries
  getOutletByOutletId: (outletId) => {
    const promise = new Promise((resolve, reject) => {
      Outlet.find({ outletId }, (err, outlet) => {
        if (err) reject(err);
        resolve(outlet[0]);
      });
    });
    return promise;
  },
  getAllOutlets: () => {
    const promise = new Promise((resolve, reject) => {
      Outlet.find({}, (err, outlets) => {
        if (err) reject(err);
        resolve(outlets);
      });
    });
    return promise;
  },
};
