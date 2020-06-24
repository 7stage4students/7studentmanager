
const express = require('express');
const exphbs =  require('express-handlebars');
const path = require('path');
// const { parseTwoDigitYear } = require('moment');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jsonfile = require('jsonfile');
const fs = require('fs');

//Routers
// const adminManager = require('./routes/admin');
const adminRouter =  require('./routes/adminRouter');
const studentRouter = require('./routes/studentRouter');
const regularRouter = require('./routes/regularRouter');


const app = express()
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieParser()); 

app.engine('handlebars',exphbs())
app.set('view engine','handlebars');

app.use(express.static(path.join(__dirname, 'public')));

///TODO check routers
// app.use('/admin', adminManager);


// app.get('/',(req, res)=>{
//     res.render('index');
// })
//  app.get('/register', (req, res)=>{
//     res.render('register');
// });
// app.get('/login', (req, res) => {
//     res.render('student_login');
// });
// app.get('/admin_login', (req, res)=>{
//     res.render('admin_login')
// });
// app.get('/admin_landing', (req, res)=>{
//     res.render('admin_landing')
// })

// app.get('/admin', (req, res)=>{
//     res.render('admin_dashboard/admin');
// });
// app.get('/admin/students', (req, res)=>{
//     res.render('admin_dashboard/students');
// });
// app.get('/admin/course', (req, res)=>{
//     res.render('admin_dashboard/course');
// });
// app.get('/admin/attendance', (req, res)=>{
//     res.render('admin_dashboard/attendance');
// });
// app.get('/admin/edit', (req, res)=>{
//     res.render('admin_dashboard/edit');
// });
// app.get('/student', (req, res)=>{
//     res.render('student_dashboard/student');
// });
// app.get('/student/profile', (req, res)=>{
//     res.render('student_dashboard/profile');
// });

let authUsers = {}
let authStudents = {}

// Creating the online user cookie files

app.use('/', regularRouter);

app.use('/admin',(req,res,next) =>{
    // console.log('Checking cookies');
    let token = req.cookies['authtoken'];
    console.log('The token: '+ token);
    authUsers =  jsonfile.readFileSync(path.join(__dirname,'/db/authUsers.json'))
  
    req.user = authUsers[token];
    next();
})

        
app.use('/admin', adminRouter);

app.use('/students',(req,res,next) => {
    // console.log('Checking cookies');
    // let token = req.cookies['authtoken'];
    // authStudents =  jsonfile.readFileSync(path.join(__dirname,'/db/authStudents.json'))
    // req.user = authStudents[token];
    next();
})



app.use('/students',studentRouter);

app.listen(8080,()=>{
    console.log('Server is running on http://127.0.1.1:8080');
})