const mongoose = require('mongoose');
const utils = require('../utils/utils');

const userSchema = mongoose.Schema({
  uid: String,
  f_name: String,
  l_name: String,
  user_pic: String,
  password: String,
  is_phone_varified: Boolean,
  phone_number: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = {
  getAllUsers: () => {
    const promise = new Promise((resolve, reject) => {
      User.find((err, users) => {
        if (err) reject(err);
        resolve(users);
      });
    });
    return promise;
  },
  createNewUser: (newUser) => {
    const updatedInfo = {
      uid: utils.getUniqueId(),
      password: utils.securePassword(newUser.password),
    };
    const user = new User(Object.assign(newUser, updatedInfo));
    const promise = new Promise((resolve, reject) => {
      user.save((err, dbUser) => {
        if (err) reject(err);
        resolve(dbUser);
      });
    });
    return promise;
  },
  getUserByUID: (uid) => {
    const promise = new Promise((resolve, reject) => {
      User.find({ uid }, (err, user) => {
        if (err) reject(err);
        resolve(user[0]);
      });
    });
    return promise;
  },
};
