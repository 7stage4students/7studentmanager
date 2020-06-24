var validator = require("email-validator");
var firebase = require("firebase");


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
firebase.initializeApp(
firebaseConfig
);

var auth = firebase.auth();

exports.index = (req,res,next) => {
    res.render('index');
}

exports.loginForm = (req,res,next) => {
    res.render('login');
}
exports.registerForm = (req,res,next) => {
    res.render('register');
}



exports.login = (req, res, next)=>{
    var {email, password} = req.body;
    //validate email
    if(validator.validate(email)){
     auth.signInWithEmailAndPassword(email, password).then((value)=>{
         
     })

    }
   
}

exports.signOut = (req, res, next)=>{
    auth.signOut().then(()=>{
        console.log("succesfully signed out")
    });
}

exports.register = (req, res, next)=>{
    
    res.send("register")
}