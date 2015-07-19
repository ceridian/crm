var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
//var mongoose = require('mongoose');
var path = require('path');
var fs       = require('fs');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

//var configDB = require('./config/database.js');

//mongoose.connect(configDB.url); // connect to our database

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'jfalajgiyiaog7a90g7a6gyaoyga7g0aygalyhga',
    resave: false,
    saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes.js')(app);

app.use(function(req, res, next){
  res.redirect('/');
});

app.use(function(err, req, res, next) {
  if(err){
  	res.status(err.status || 500);
  	res.send(err);
  }else{
    res.redirect('/');
  }
});

module.exports = app;
