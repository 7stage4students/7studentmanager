const functions = require('firebase-functions');
const {
  firebase,
  admin
} = require('./env/firebase_config');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: true
}));
//Middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

  return res.render('index')
});

//Routers
const studentRouter = require('./routes/studentRouter');
const adminRouter = require('./routes/adminRouter');
const regularRouter = require('./routes/regularRouter');


app.use("/", regularRouter);
app.use('/student', studentRouter);


exports.app = functions.https.onRequest(app);