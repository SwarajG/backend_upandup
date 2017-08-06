const db = require('../db');
module.exports = {
  getAllUsers: () => {
    const collection = db.get().collection('testCollection');
    const promise = new Promise((resolve, reject) => {
      collection.find().toArray((err, docs) => {
        resolve(docs);
      });
    });
    return promise;
  },
  createNewUser: (newUser) => {
    const collection = db.get().collection('testCollection');
    const promise = new Promise((resolve, reject) => {
      collection.insert(newUser, (err, result) => {
        collection.find(newUser).toArray((err, docs) => {
          resolve(docs[0]);
        });
      });
    });
    return promise;
  }
}
