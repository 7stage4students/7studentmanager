const express = require('express');
const router = express.Router();

//My Imports
const studentController = require('../controllers/studentController');

// Student Login
router.get('/login', studentController.getLogin);

router.post('/login',studentController.postLogin)

router.post('/register', studentController.postRegister);

router.get('/register',studentController.getRegister)

// router.post('/login/:name/:password');

module.exports = router;