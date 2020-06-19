const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('Admin_Dashboard/admin');
});
router.get('/students', (req, res)=>{
    res.render('Admin_Dashboard/students');
});
router.get('/course', (req, res)=>{
    res.render('Admin_Dashboard/course');
});
router.get('/attendance', (req, res)=>{
    res.render('Admin_Dashboard/attendance');
});
router.get('/edit', (req, res)=>{
    res.render('Admin_Dashboard/edit');
});

module.exports = router;