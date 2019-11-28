var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var companyUserSchema = new mongoose.Schema({
    username: String,
    password: String,
    profile: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Company'
    }
});

companyUserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('CompanyUser', companyUserSchema);