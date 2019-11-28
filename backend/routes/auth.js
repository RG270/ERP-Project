
// IMPORTING REQUIRED PACKAGES

var router = require('express').Router({mergeParams: true});
var studentUser = require('../models/studentUser');
var companyUser = require('../models/companyUser');
var passport = require('passport');



// RESPONDING THE LOGIN STATUS OF THE USER

router.get('/loginStatus', (req, res)=>{
    let data = {
        isLoggedIn: true,
        username: ''
    };
    if (req.user){
        data.username = req.user.username;
       res.json(data);
    } else  {
        data.isLoggedIn = false;
        data.username = '';
        res.json(data);
    }
});


// STUDENT SIGNUP

router.post('/signup/student', (req, res)=>{
    studentUser.register(new studentUser({username: req.body.username}), req.body.password, (err, user)=>{
        if (err)res.send("error");
        else {
            passport.authenticate('student-local')(req, res, ()=>{
                res.send(req.user.username);
                } );
        }
    })
});


// COMPANY SIGNUP

router.post('/signup/company', (req, res)=>{
    companyUser.register(new companyUser({username: req.body.username}), req.body.password, (err, user)=>{
        if (err) res.send("error");
        else {
            passport.authenticate('company-local')(req, res, ()=>{
                res.send(req.user.username);
            });
        }
    });
});


// STUDENT LOGIN

router.post('/login/student', passport.authenticate('student-local'), (req, res)=>{
   
        res.send(req.user.username);
   
});

router.post('/login/company', passport.authenticate('company-local'), (req, res)=>{
    res.send(req.user.username);
});

router.post('/logout', (req, res)=>{
   req.logout();
   res.send("you have been successfully logged out");
}
);


module.exports = router;