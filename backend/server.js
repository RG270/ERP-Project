
// IMPORTING REQUIRED PACKAGES

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var cors = require('cors');
app.use(cors());
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/erp', {useNewUrlParser: true});
mongoose.set('debug', true);

var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var StudentUser = require('./models/studentUser');
var CompanyUser = require('./models/companyUser');
// SETTING UP THE PASSPORT

passport.use('student-local', new LocalStrategy(StudentUser.authenticate()));
passport.use('company-local', new LocalStrategy(CompanyUser.authenticate()));
passport.serializeUser((user, done)=>{done(null, user);});
passport.deserializeUser((user, done)=>{if (user!=null) done(null, user);})

app.use(express.static('public'));
app.use(session({
    secret: 'there is nothing secret about this',
    resave: false,
    saveUninitialized: false
 }));
app.use(passport.initialize());
app.use(passport.session());



var indexRoutes = require('./routes/index');
var companyRoutes = require('./routes/company');
var studentRoutes = require('./routes/student');
var authRoutes  = require('./routes/auth');


app.use('/', indexRoutes);
app.use('/company/', companyRoutes);
app.use('/student/', studentRoutes);
app.use('/', authRoutes);

app.listen(3001 , (req, res) => {
    console.log('server is listening');
});

module.exports = app;
