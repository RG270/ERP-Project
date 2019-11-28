var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    id: String,
    name: String,
    branch: String,
    rollNo: String,
    email: String,
    mobNo: String,
    skillSet: [],
    linkedin: String,
    gender: String,
    cgpa: Number,
    backLog: Boolean,
    placed: Boolean,
    companyPlaced: {
        name: String,
        package: Number,
        onCampus: Boolean
    },
    blackList: Boolean
});

module.exports = mongoose.model('Student', studentSchema);
