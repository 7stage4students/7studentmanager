const express = require('express');
const router = express.Router();

//My Imports
const regularController = require('../controllers/regularController')

router.get('/', regularController.index);

router.get('/login', regularController.loginForm);

router.get('/register', regularController.registerForm);

router.post('/login', regularController.login)

router.post('/register', regularController.register);

router.get("/signOut", regularController.signOut)

router.get("/student/:matricule", regularController.getStudentInfo)


module.exports = router;