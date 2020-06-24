const hashMethod = require('../utils/hash');
const generateAuthToken = require('../utils/authToken')
const jsonfile = require('jsonfile');
const path = require('path');


const Student = require('../models/Student.js');
const Admin = require('../models/adminModel')


let authUsers = {}

//Admin Login Page
//TODO Render the admin page
exports.getLogin = async (req,res,next) => {
    //Bellow you should render the admin login page 
    res.render('admin_login')
    // res.send('Admins Login') 
}

//Admin Login Request
exports.postLogin = (req,res,next) => {
    var isAdmin =  Admin.validAdmin(req.body.email,req.body.password);
    if(isAdmin){
        // console.log('admin is valid')
        const token = generateAuthToken();
        console.log('Auth Token',token)
        let email = req.body.email;
        let password = hashMethod(req.body.password);
        // const authToken = generateAuthToken;
        authUsers[token] = {email, password};
        jsonfile.writeFile(path.join(__dirname,'../','db/authUsers.json'), authUsers)
        .then(res => {
            console.log('update complete')
        })
        .catch(error => console.error(error))
        // console.log(authUsers);

        res.cookie('authtoken',token);
        res.render('admin_dashboard/admin');
    }else {
        res.render('admin_login');
    }
}
// get all students in all Levels
exports.getAllStudents = (req,res,next) => {
    if(req.user) {
        let students = Student.getAll();
        res.send(students)
        res.render('admin_dashboard/students');
    }else {
        //You don't have access to this route
       res.redirect('admin_dashboard/admin');
    }
}

//TODO getting a single student
// get a single student
exports.getStudent = (req,res,next) => {
    if(req.user) {
        res.send('Get Student Admin')
    }else {
        res.send('You are not admin')
    }
}

//TODO get by level
// get all students from course/level
exports.getStudentsByLevel = (req,res,next) => {
    let course = req.params.course;
    let level = req.params.level;
    if(req.user){
        let students = Student.getAllByCourseLevel(course,level)
        res.json(students)
    }else {
        res.json('Not Admin You Can not see students')
    }
   
}

//TODO Attendance model is still to be implemented
// mark a student attendance  
exports.postMarkAtendance = (req,res,next) => {
    let id  = req.params.id;
    if(req.user){
        res.json('students attendance')
    }else {
        res.json('Not Admin You Can not see students Attendance')
    }
}




// delete student  
exports.deleteStudent = (req,res,next) => {
    let studId = req.params.studId;

    if(req.user){
        Student.deleteStudent(studId)
        res.json('Student Deleted')
    }else {
        res.json('Not Admin You Can not delete student')
    }
    
}
