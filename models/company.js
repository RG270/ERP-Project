var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
    id: String,
    name: String,
    type: String,
    phone: [],
    email: [],
    website: String,
    address: String,
    offer: Number

});

module.exports = mongoose.model('Company', companySchema);
