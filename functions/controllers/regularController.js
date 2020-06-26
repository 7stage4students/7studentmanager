var validator = require("email-validator");
var firebase = require("firebase");




var auth = firebase.auth();

exports.index = (req, res, next) => {
    res.render('index');
}

exports.loginForm = (req, res, next) => {
    res.render('login');
}
exports.registerForm = (req, res, next) => {
    res.render('register');
}



exports.login = (req, res, next) => {
    var {
        email,
        password
    } = req.body;
    //validate email
    if (validator.validate(email)) {
        
        auth.signInWithEmailAndPassword(email, password).then((value) => {

        })

    }

}

exports.signOut = (req, res, next) => {
    auth.signOut().then(() => {
        console.log("succesfully signed out")
    });
}

exports.register = async(req, res, next) => {
    ///TODO check validation
    ///TODO check if user exists
    ///TODO register new user
    ///TODO redirect to dashboard
   
        console.log(req.body)
        var {
            first_name,
            last_name,
            level,
            email,
            dob,
            gender,
            course,
            phone,
            matricule,
            password
        } = req.body;
        const user = await admin.auth().createUser({
            email,
            phone,
            password,
            displayName: `${first_name} ${last_name}`,
            photoURL: ''
        });

        return res.send(user);

}