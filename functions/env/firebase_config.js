const firebase = require('firebase')
const admin = require('firebase-admin')
const serviceAccount = require("./firebase-permissions.json");
const firebaseConfig = {
    apiKey: "AIzaSyD5uDwSnZOt4JgRabgbPa6pVCWT5hAvv00",
    authDomain: "seven-student-manager.firebaseapp.com",
    databaseURL: "https://seven-student-manager.firebaseio.com",
    projectId: "seven-student-manager",
    storageBucket: "seven-student-manager.appspot.com",
    messagingSenderId: "22957180351",
    appId: "1:22957180351:web:938c0e5fb5f4271dd9cd0a",
    measurementId: "G-E01R35FKCM"
  };
firebase.initializeApp(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://seven-student-manager.firebaseio.com"
});
module.exports = { firebase, admin };