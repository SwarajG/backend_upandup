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
  facebookId: String,
  googleId: String,
});

const User = mongoose.model('User', userSchema);

const getUserByPhoneNumber = (phoneNumber) => {
  const promise = new Promise((resolve, reject) => {
    User.findOne({ phone_number: phoneNumber }, (err, user) => {
      if (err) reject(err);
      resolve(user[0]);
    });
  });
  return promise;
};

const getUserByEmail = (email) => {
  const promise = new Promise((resolve, reject) => {
    User.findOne({ email }, (err, user) => {
      if (err) reject(err);
      resolve(user);
    });
  });
  return promise;
};

const getUserByFacebookID = (facebookId) => {
  const promise = new Promise((resolve, reject) => {
    User.findOne({ facebookId }, (err, user) => {
      if (err) reject(err);
      resolve(user);
    });
  });
  return promise;
};

const getUserByGoogleID = (googleId) => {
  const promise = new Promise((resolve, reject) => {
    User.findOne({ googleId }, (err, user) => {
      if (err) reject(err);
      resolve(user);
    });
  });
  return promise;
};

const verifyUser = (dbUser, dbUserName, password, done) => {
  const securePassword = utils.securePassword(password);
  const dbPassword = dbUser.password;
  if (securePassword === dbPassword) {
    const {
      uid,
      f_name,
      l_name,
      user_pic,
      phone_number,
      email,
      is_phone_varified,
    } = dbUser;
    done(null, {
      uid,
      f_name,
      l_name,
      user_pic,
      phone_number,
      email,
      is_phone_varified,
    });
  } else {
    done(null, false);
  }
};

module.exports = {
  authenticate: (username, password, done) => {
    if (username.length === 13 && username.indexOf('+91') >= 0) {
      getUserByPhoneNumber(username)
        .then(response => verifyUser(response, response.phone_number, password, done))
        .catch(err => console.log(err));
    } else if (typeof username === 'string') {
      getUserByEmail(username)
        .then(response => verifyUser(response, response.email, password, done))
        .catch(err => console.log(err));
    }
  },
  getAllUsers: () => {
    const promise = new Promise((resolve, reject) => {
      User.find({}, (err, users) => {
        if (err) reject(err);
        resolve(users);
      });
    });
    return promise;
  },
  createOrUpdate: (newUser) => {
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
  getUserByPhoneNumber,
  getUserByEmail,
  deleteUser: (uid) => {
    const promise = new Promise((resolve, reject) => {
      User.find({ uid }).remove((err) => {
        if (err) reject(err);
        resolve('user deleted');
      });
    });
    return promise;
  },
};
