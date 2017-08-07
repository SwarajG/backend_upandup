const db = require('../db');

module.exports = {
  getAllUsers: () => {
    const collection = db.get().collection('User');
    const promise = new Promise((resolve) => {
      collection.find().toArray((err, docs) => {
        resolve(docs);
      });
    });
    return promise;
  },
  createNewUser: (newUser) => {
    const collection = db.get().collection('User');
    const promise = new Promise((resolve) => {
      collection.insert(newUser, () => {
        collection.find(newUser).toArray((error, docs) => {
          resolve(docs[0]);
        });
      });
    });
    return promise;
  },
};
