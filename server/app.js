var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const path = require('path');
// const http = require('http');
const db = require('./db');


//const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '../dist')))

// API location
//app.use('/api', api);
/*
app.get('*',  (req, res, next) => {

  req.on("error", function (error) {
  console.error(error.status);

  res.sendFile(path.join(__dirname, '../dist/index.html'));
  //res.send(res.statusCode);
  // if(res.statusCode != 200){
    //res.sendFile(path.join(__dirname, '../dist/index.html'));
    //console.log("brak")

  //}
  // next();
//  if(req.headers.accept.indexOf('html'))
  //  res.render('404', { url: req.protocol + '://' + req.get('host') + req.originalUrl })
  //else
   // res.send("URL cannot found")
next();
})

*/
// Send all other requests to the Angular app

/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
*/
/*app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, '../dist/index.html'));
})*/

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
   res.header("Access-Control-Allow-Headers", " Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, HEAD');
    next();
});



var UserController = require('./user/UserController');
app.use('/users', UserController);
var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);
var KlientController = require('./klient/KlientController');
app.use('/api', KlientController);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

module.exports = app;
