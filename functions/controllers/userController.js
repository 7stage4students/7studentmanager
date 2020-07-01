// const {
//     firebase,
//     admin
// } = require('../env/firebase_config');


// exports.login = (req, res) => {
//     firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
//         .then(() => {
//             firebase.auth().currentUser.getIdToken(true).then((idToken) => {
//                 res.send(idToken)
//                 res.end()
//             }).catch((error) => {
//                 //Handle error
//                 console.log(error)
//             });
//         }).catch((error) => {
//             //Handle error
//             console.log("error")
//         });
// }