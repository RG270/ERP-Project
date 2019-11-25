var router = require('express').Router({mergeParams: true});
var studentUser = require('../models/studentUser');
var passport = require('passport');

router.post('/signup/student', (req, res)=>{
    studentUser.register(new studentUser({username: req.body.username}), req.body.password, (err, user)=>{
        if (err)console.log(err);
        else {
            passport.authenticate('student-local')(req, res, ()=>{
                res.send("success");
            } );
        }
    })
});

module.exports = router;