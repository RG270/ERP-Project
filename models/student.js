var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    id: String,
    name: String,
    branch: String,
    rollno: String,
    email: String,
    phone: String,
    skillSet: [],
    linkedin: String,
    gender: String,
    cgpa: Number,
    backlog: boolean,
    placed: boolean,
    companyPlaced: {
        name: String,
        package: Number,
        onCampus: boolean
    },
    blacklist: boolean
});

module.exports = mongoose.model('Student', studentSchema);
