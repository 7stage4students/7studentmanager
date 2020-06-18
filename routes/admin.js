const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('Admin_Dashboard/index');
});
router.get('/', (req, res)=>{
    res.render('Admin_Dashboard/students');
});
router.get('/', (req, res)=>{
    res.render('Admin_Dashboard/course');
});
router.get('/', (req, res)=>{
    res.render('Admin_Dashboard/attendance');
});
router.get('/', (req, res)=>{
    res.render('Admin_Dashboard/edit');
});
module.exports = router;