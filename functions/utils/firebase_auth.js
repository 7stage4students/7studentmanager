const { firebase, admin } = require('../env/firebase_config.js');
module.exports = (req, res, next) => {
const token = req.header('Authorization').replace('Bearer', '').trim()
var user = firebase.auth().currentUser;
if (user) {
   admin.auth().verifyIdToken(token)
  .then((decodedToken) => {
      if(decodedToken.uid === user.uid) {
         req.user = user.uid
         return next()
      }
      return null;
   }).catch((error) => {
     //Handle error
    throw error;
   });
}
 else {
res.send("user not found")
}
};