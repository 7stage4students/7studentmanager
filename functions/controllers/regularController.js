var validator = require("email-validator");
const {
    firebase,
    admin
} = require("../env/firebase_config.js")

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

exports.register = async (req, res, next) => {
    ///implement matriculation check
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
        password,
        confirm_password
    } = req.body;

    if (password !== confirm_password) {
        return res.render("register", {
            'message': 'Passwords do not match',
            'messageClass': "alert-danger"
        })
    }

    if (!validator.validate(email)) {
        return res.render("register", {
            'message': 'Invalid Email Address',
            'messageClass': "alert-danger"
        })
    }

    const user = await admin.auth().createUser({
        email,
        phone,
        password,
        disabled: true,
        displayName: `${first_name} ${last_name}`,
        photoURL: 'https://sevenadvancedacademy.com/themes/seven/assets/images/logo.png'
    }).catch((error) => {
        console.log(error);
        return res.render("register", {
            'message': 'An Error Occured',
            'messageClass': "alert-danger"
        })
    }).then((value) => {
        console.log(value)
        return res.render('dashboard/student')
    });





}