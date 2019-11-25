var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var studentUserSchema = new mongoose.Schema({
    username: String,
    password: String,
    profile: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Student'
    }
});

studentUserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('StudentUser', studentUserSchema);