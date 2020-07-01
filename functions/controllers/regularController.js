var validator = require("email-validator");
const {
    admin
} = require("../env/firebase_config.js");
const Student = require("../models/Student.js");
const { DataSnapshot } = require("firebase-functions/lib/providers/database");

var db = admin.firestore();

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
    // if (validator.validate(email)) {

        

    // }

}

exports.signOut = (req, res, next) => {
    admin.auth.signOut().then((value) => {
    return res.send("sign_out")    }).catch((error)=>{
        throw error
    });
}

exports.register = (req, res) =>{
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
    return admin.auth().createUser({
        email,
        phone,
        password,
        disabled: true,
        displayName: `${first_name} ${last_name}`,
        photoURL: 'https://sevenadvancedacademy.com/themes/seven/assets/images/logo.png'
    }).then((value)=>{
        
            const studentsRef = db.collection('students').doc();

            var newStudent = new Student();
            newStudent.id = studentsRef.id;
            newStudent.email = email;
            newStudent.phone = phone;
            newStudent.first_name = first_name;
            newStudent.matricule = matricule;
            newStudent.last_name = last_name;
            newStudent.photoUrl = 'https://sevenadvancedacademy.com/themes/seven/assets/images/logo.png';
            newStudent.qrCodeUrl = "";

            let setSf = studentsRef.set(JSON.parse(JSON.stringify(newStudent)));

            return res.send("saved")

    // }catch(error){
        //     throw error;
        //     return res.status(500).send(error);
        // }
    }).catch((error)=>{
        console.log(error);
        return res.render("register", {
            'message': 'An Error Occured',
            'messageClass': "alert-danger"
        })
    });
}


exports.getStudentInfo = async (req, res)=>{
    var matricule = req.params.matricule;
   ///get matricule form datbase
     let studentRef = await db.collection("students").doc(matricule).get();
     console.log(studentRef)
     var currentStudent = new Student();
     if(studentRef.exists){
       return  res.json(currentStudent.snapshotToJSON(studentRef));
     }else{
       return res.status(500).body(`${matricule} not found`)
     }

}