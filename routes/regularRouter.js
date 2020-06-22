const express = require('express');
const router = express.Router();

//My Imports
const regularController = require('../controllers/regularController')

// Student Login
router.get('/', regularController.getLogin);

module.exports = router;