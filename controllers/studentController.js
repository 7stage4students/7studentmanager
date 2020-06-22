const hashMethod = require('../utils/hash');
const generateAuthToken = require('../utils/authToken')
const jsonfile = require('jsonfile');
const path = require('path');
const Student = require('../models/studentsModel');
// const Admin = require('../models/adminModel')

let authStudent = {}


exports.getLogin = (req,res,next) => {
    res.render("student_login");
    // res.send('Student Login Page')
}

exports.getRegister = () => {
    res.render('register');
    //res.send('student Register Page')
}

exports.postRegister = () => {
    if(req.body) {
        Student.register(req.body)
        res.json('student registered'); 
        res.render('student_login');
    }else {
        res.render('register');
    }
        
}

exports.postLogin = (req,res,next) => {
    var isStudent =  Student.validStudent(req.body.email,req.body.password);
    if(isStudent){
        // console.log('admin is valid')
        const token = generateAuthToken();
        // console.log('Auth Token',token)
        let email = req.body.email;
        let password = req.body.password;
        // const authToken = generateAuthToken;
        authStudent[token] = {email, password};
        jsonfile.writeFile(path.join(__dirname,'../','db/authStudent.json'), authStudent)
        .then(res => {
            console.log('update complete')
        })
        .catch(error => console.error(error))
        console.log(authStudent);

        res.cookie('authtoken',token);
        //Student Sucessfully Loged In
        res.render('student_dashboard/student');
    }else {
        res.render('student_login');
    }
}

