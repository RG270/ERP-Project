
// IMPORT REQUIRED PACKAGES

var express = require('express');
var router = express.Router({mergeParams: true});
var ObjectId = require('mongoose').Types.ObjectId;
var Student = require('../models/student.model');
var cors = require('cors');
router.use(cors());

// GET LIST OF ALL THE STUDENTS

router.get('/', (req, res)=>{
    Student.find({}, (err, result)=>{
        if (err) console.log(err);
        else res.json(result);
    });
});


// GET INFO ABOUT A PARTICULAR STUDENT

router.get('/:id', (req, res)=>{
    Student.find({_id : req.params.id}, (err, found)=>{
        if (err) console.log(err);
        else res.json(found);
    })
})


// ADD A STUDENT

router.post('/add', (req, res)=>{
    console.log(req.body);
    Student.create(req.body, (err, created)=>{
        if (err) console.log(err);
        else  {
          Student.find({}, (err, result)=>{
              if (err)console.log(err);
              else res.json(result);
          });
      }
    });
})


// GET STUDENT PROFILE

router.get('/:id/show', (req, res)=>{
    let id = ObjectId(req.params.id.toString());
    Student.find({_id: id }, (err, found)=>{
        if (err) console.log("error");
        else {
            res.json(found);
            console.log(found);
        }
    });
});


// APPLY FILTER 

router.post('/filters', (req, res)=>{
   let filter = {
       $and: [{cgpa: {$gte : req.body.minCGPA}}, {cgpa: {$lte: req.body.maxCGPA} } ]
   };
   Student.find(filter, (err, found)=>{
       if (err)console.log(err);
       else res.json(found);
   });
});


// DELETE A STUDENT

router.delete('/:id/delete',(req, res)=>{
    const id = ObjectId(req.params.id.toString());
   Student.deleteOne({_id: id}, (err, deleted)=>{
       if (err) console.log(err);
       else {
           Student.find({}, (err, result)=>{
               if (err) console.log(err);
               else res.json(result);
           });
       }
   });
} );


// UPDATE STUDENT DETAILS

router.put('/:id/put', (req, res)=>{
    const id = ObjectId(req.params.id.toString());
    Student.updateOne({_id: id }, req.body,  (err, result)=>{
        if (err)console.log(err);
        else {
            Student.find({}, (err, result)=>{
                if (err)console.log(err);
                else res.json(result);
            });
        }
    });
});


module.exports = router;