const mongoose = require('mongoose');
const utils = require('../utils/utils');

const categorySchema = mongoose.Schema({
  categoryId: String,
  name: String,
  description: String,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = {
  // Mutation
  create: (newCategory) => {
    const categoryId = {
      categoryId: utils.getUniqueId(),
    };
    const category = new Category(Object.assign(newCategory, categoryId));
    const promise = new Promise((resolve, reject) => {
      category.save((err, dbCategory) => {
        if (err) reject(err);
        resolve(dbCategory);
      });
    });
    return promise;
  },
  update: (categoryId, updatedCategory) => {
    const promise = new Promise((resolve, reject) => {
      Category.findOneAndUpdate({ categoryId }, updatedCategory, (err, dbCategory) => {
        if (err) reject(err);
        resolve(dbCategory);
      });
    });
    return promise;
  },
  delete: (categoryId) => {
    const promise = new Promise((resolve, reject) => {
      Category.find({ categoryId }).remove((err) => {
        if (err) reject(err);
        resolve('category deleted');
      });
    });
    return promise;
  },
  // Quries
  getCategoryByCategoryId: (categoryId) => {
    const promise = new Promise((resolve, reject) => {
      Category.find({ categoryId }, (err, category) => {
        if (err) reject(err);
        resolve(category[0]);
      });
    });
    return promise;
  },
  getAllCategories: () => {
    const promise = new Promise((resolve, reject) => {
      Category.find({}, (err, categories) => {
        if (err) reject(err);
        resolve(categories);
      });
    });
    return promise;
  },
};
