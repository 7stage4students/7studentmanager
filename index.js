
const express = require('express');
const exphbs =  require('express-handlebars');
const path = require('path');
const { parseTwoDigitYear } = require('moment');
const bodyParser = require('body-parser');
const adminManager = require('./routes/admin');

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.engine('handlebars',exphbs())
app.set('view engine','handlebars');

app.use(express.static(path.join(__dirname, 'public')));

///TODO check routers
// app.use('/admin', adminManager);


app.get('/',(req, res)=>{
    res.render('index');
})
 app.get('/register', (req, res)=>{
    res.render('register');
});
app.get('/login', (req, res) => {
    res.render('student_login');
});
app.get('/admin_login', (req, res)=>{
    res.render('admin_login')
});
app.get('/admin_landing', (req, res)=>{
    res.render('admin_landing')
})

app.get('/admin', (req, res)=>{
    res.render('admin_dashboard/admin');
});
app.get('/admin/students', (req, res)=>{
    res.render('admin_dashboard/students');
});
app.get('/admin/course', (req, res)=>{
    res.render('admin_dashboard/course');
});
app.get('/admin/attendance', (req, res)=>{
    res.render('admin_dashboard/attendance');
});
app.get('/admin/edit', (req, res)=>{
    res.render('admin_dashboard/edit');
});
app.get('/student', (req, res)=>{
    res.render('student_dashboard/student');
});
app.get('/student/profile', (req, res)=>{
    res.render('student_dashboard/profile');
});
app.listen(8080,()=>{
    console.log('Server is running on http://127.0.1.1:8080');
})