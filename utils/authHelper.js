const jwt = require('jsonwebtoken');
// const user = require('../model/user');
const enums = require('../utils/enum');

module.exports = {
  serialize: (req, res, next) => {
    next();
    // req.user.loggedIn += req.user.loggedIn;
    // user.createOrUpdate(req.user, (err, dbUser) => {
    //   if (err) {
    //     next(err);
    //   }
    //   req.user = {
    //     uid: dbUser.uid,
    //   };
    //   next();
    // });
  },
  generateToken: (req, res, next) => {
    req.token = jwt.sign({
      uid: req.user.uid,
    }, enums.SESSIONSECRET, {
      expiresIn: enums.TOKENTIME,
    });
    next();
  },
  respond: (req, res) => {
    res.status(200).json({
      user: req.user,
      token: req.token,
    });
  },
};
