var express = require('express');
var router = express.Router({mergeParams: true});
var ObjectId = require('mongoose').Types.ObjectId;
var Company = require('../models/company.model');
var cors = require('cors');
router.use(cors());

router.get('/', (req, res)=>{
    Company.find({}, (err, company)=>{
        if (err) console.log(err);
        else {
            console.log(company);
           
            res.json(company);
        }
    });
});

router.post('/add', (req, res)=>{
  console.log("here");
   Company.create(req.body, (err, created)=>{
      if (err) console.log(err);
      else  {
        Company.find({}, (err, result)=>{
            if (err)console.log(err);
            else res.json(result);
        });
    }
  });
 
});

router.delete('/:id/delete',(req, res)=>{
    const id = ObjectId(req.params.id.toString());
   Company.deleteOne({_id: id}, (err, deleted)=>{
       if (err) console.log(err);
       else {
           Company.find({}, (err, result)=>{
               if (err)console.log(err);
               else res.json(result);
           });
       }
   });
} );

module.exports = router;