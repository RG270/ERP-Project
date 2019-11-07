var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    id: String,
    name: String,
    branch: String,
    rollNo: String,
    email: String,
    phone: String,
    skillSet: [],
    linkedin: String,
    gender: String,
    cgpa: Number,
    backlog: Boolean,
    placed: Boolean,
    companyPlaced: {
        name: String,
        package: Number,
        onCampus: Boolean
    },
    blacklist: Boolean
});

module.exports = mongoose.model('Student', studentSchema);
