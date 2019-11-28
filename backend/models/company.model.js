
var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
    id: String,
    name: String,
    type: String,
    mobNo: String,
    email: String,
    package: Number,
    website: String,
    address: String,
    offer: Number

});

module.exports = mongoose.model('Company', companySchema);
