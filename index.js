const express = require('express');
const exphbs =  require('express-handlebars');
const path = require('path');
const { parseTwoDigitYear } = require('moment');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.engine('handlebars',exphbs())
app.set('view engine','handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.render('index');
})
app.get('/register', (req, res)=>{
    res.render('register');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/student', (req, res) => {
    res.render('student');
});
app.get('/profile', (req, res) => {
    res.render('profile');

});
app.get('/dashboard', (req, res) => {
    res.render('student');
});
app.listen(8080,()=>{
    console.log('Server is running on http://127.0.0.1:8080');
})