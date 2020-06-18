const express = require('express');
const exphbs =  require('express-handlebars');
const path = require('path');
const { parseTwoDigitYear } = require('moment');
const bodyParser = require('body-parser');
const adminManager = require('./routes/admin')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.engine('handlebars',exphbs())
app.set('view engine','handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminManager);
app.get('/',(req, res)=>{
    res.render('index');
})
app.get('/register', (req, res)=>{
    res.render('register');
});
app.get('/login', (req, res) => {
    res.render('login');
});

app.listen(8080,()=>{
    console.log('Server is running on Port 8080');
})