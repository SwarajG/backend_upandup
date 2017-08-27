const mongoose = require('mongoose');
const utils = require('../utils/utils');

const menuItemSchema = mongoose.Schema({
  menuItemId: String,
  name: String,
  price: Number,
  picture: String,
  description: String,
  status: String,
  categoryId: String,
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = {
  // Mutation
  create: (newMenuItem) => {
    const menuItemId = {
      menuItemId: utils.getUniqueId(),
    };
    const menuItem = new MenuItem(Object.assign(newMenuItem, menuItemId));
    const promise = new Promise((resolve, reject) => {
      menuItem.save((err, dbMenuItem) => {
        if (err) reject(err);
        resolve(dbMenuItem);
      });
    });
    return promise;
  },
  update: (menuItemId, updatedMenuItem) => {
    const promise = new Promise((resolve, reject) => {
      MenuItem.findOneAndUpdate({ menuItemId }, updatedMenuItem, (err, dbMenuItem) => {
        if (err) reject(err);
        resolve(dbMenuItem);
      });
    });
    return promise;
  },
  delete: (menuItemId) => {
    const promise = new Promise((resolve, reject) => {
      MenuItem.find({ menuItemId }).remove((err) => {
        if (err) reject(err);
        resolve('menuItemId deleted');
      });
    });
    return promise;
  },
  // Quries
  getMenuItemByMenuItemId: (menuItemId) => {
    const promise = new Promise((resolve, reject) => {
      MenuItem.find({ menuItemId }, (err, menuItem) => {
        if (err) reject(err);
        resolve(menuItem[0]);
      });
    });
    return promise;
  },
  getMenuItemByCategoryId: (categoryId) => {
    const promise = new Promise((resolve, reject) => {
      MenuItem.find({ categoryId }, (err, menuItem) => {
        if (err) reject(err);
        resolve(menuItem[0]);
      });
    });
    return promise;
  },
  getAllMenuItems: () => {
    const promise = new Promise((resolve, reject) => {
      MenuItem.find({}, (err, menuItems) => {
        if (err) reject(err);
        resolve(menuItems);
      });
    });
    return promise;
  },
};
