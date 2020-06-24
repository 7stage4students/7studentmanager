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

exports.getRegister = (req,res) => {
    res.render('register');
    //res.send('student Register Page')
}

exports.postRegister = (req,res) => {
    console.log('post requesst to regiser')
    if(req.body) {
        console.log(req.body)
        Student.register(req.body);
        // res.json('student registered'); 
        res.render('student_login', {
            message: "successfully registered please login",
            messageClass: 'alert alert-success'
        });
    }else {
        res.render('register', {
            message:"an error occured please register again",
            messageClass: 'alert alert-danger'
        });
    }
        
}

exports.postLogin = (req,res,next) => {
    console.log("success")
    var isStudent =  Student.validStudent(req.body.email,req.body.password);
    console.log(isStudent.valid)
    if(isStudent.valid){
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
        //getting student info
        let student_info = Student.get(isStudent.id);
        console.log(student_info)
        res.cookie('authtoken',token);
        //Student Sucessfully Loged In
        res.render('student_dashboard/student', {
              messageClass: 'alert-success'
        });
    }else {
        res.render('student_login', {
            message: 'User already existed',
            messageClass: 'alert-danger'
        });
    }
}

