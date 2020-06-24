const express = require('express');
const router = express.Router();

//My Imports
const adminController = require('../controllers/adminController');

//Admin Login Page Route
router.get('/admin_login',adminController.getLogin)

//Admin Login Post Request Route
router.post('/admin_login',adminController.postLogin)

// get all students in all Levels
router.get('/admin/students/', adminController.getAllStudents);

// get a single student
router.get('/admin/students/:id', adminController.getStudent);

// get all students from course/level

router.get('/courses/:course/:level/', adminController.getStudentsByLevel);

// mark a student attendance  
router.post('/attendance', adminController.postMarkAtendance);

// register student  
// router.post('/register/', adminController.postRegisterStudent);

// delete student  
router.delete('/register/:studId', adminController.deleteStudent);

module.exports = router;