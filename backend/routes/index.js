var express = require('express');
var router = express.Router({mergeParams: true});




router.get('/', (req, res)=>{
    res.send("hello there");
});

module.exports  = router;