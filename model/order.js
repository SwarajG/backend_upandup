const mongoose = require('mongoose');
const utils = require('../utils/utils');

const orderSchema = mongoose.Schema({
  orderId: String,
  time: Date,
  uid: String,
  addressId: String,
  status: String,
  itemList: Array,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {
  // Mutation
  create: (newOrder) => {
    const orderId = {
      orderId: utils.getUniqueId(),
    };
    const order = new Order(Object.assign(newOrder, orderId));
    const promise = new Promise((resolve, reject) => {
      order.save((err, dbOrder) => {
        if (err) reject(err);
        resolve(dbOrder);
      });
    });
    return promise;
  },
  update: (orderId, updatedOrder) => {
    const promise = new Promise((resolve, reject) => {
      Order.findOneAndUpdate({ orderId }, updatedOrder, (err, dbOrder) => {
        if (err) reject(err);
        resolve(dbOrder);
      });
    });
    return promise;
  },
  delete: (orderId) => {
    const promise = new Promise((resolve, reject) => {
      Order.find({ orderId }).remove((err) => {
        if (err) reject(err);
        resolve('order deleted');
      });
    });
    return promise;
  },
  // Quries
  getOrderByOrderId: (orderId) => {
    const promise = new Promise((resolve, reject) => {
      Order.find({ orderId }, (err, order) => {
        if (err) reject(err);
        resolve(order[0]);
      });
    });
    return promise;
  },
  getOrderByUid: (uid) => {
    const promise = new Promise((resolve, reject) => {
      Order.find({ uid }, (err, order) => {
        if (err) reject(err);
        resolve(order[0]);
      });
    });
    return promise;
  },
  getOrderByAddressId: (addressId) => {
    const promise = new Promise((resolve, reject) => {
      Order.find({ addressId }, (err, order) => {
        if (err) reject(err);
        resolve(order[0]);
      });
    });
    return promise;
  },
  getAllOrders: () => {
    const promise = new Promise((resolve, reject) => {
      Order.find({}, (err, orders) => {
        if (err) reject(err);
        resolve(orders);
      });
    });
    return promise;
  },
};
