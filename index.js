const express = require('express');
const exphbs =  require('express-handlebars');
const bodyParser = require("body-parser");
const fs = require("fs");


const app = express()

app.engine('handlebars',exphbs())
app.set('view engine','handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/routes.js")(app, fs);

// app.get('/',(req, res)=>{
//     res.render('index');
// })


app.listen(8080,()=>{
    console.log('Server is running on Port 8080');
})