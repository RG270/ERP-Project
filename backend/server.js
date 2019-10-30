
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
var indexRoutes = require('./routes/index');
var companyRoutes = require('./routes/company');



app.use('/', indexRoutes);
app.use('/company/', companyRoutes);


app.listen(3001 , (req, res) => {
    console.log('server is listening');
});

module.exports = app;
