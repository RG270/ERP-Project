
// IMPORTING REQUIRED PACKAGES

var express = require('express');
var router = express.Router({mergeParams: true});
var ObjectId = require('mongoose').Types.ObjectId;
var Company = require('../models/company.model');
var cors = require('cors');
router.use(cors());


// GET THE LIST OF COMPANIES

router.get('/', (req, res)=>{
    Company.find({}, (err, company)=>{
        if (err) console.log(err);
        else {
            console.log(company);
            res.json(company);
        }
    });
});


// GET THE PROFILE OF THE COMPANY

router.get('/:id/show', (req, res)=>{
    let id = ObjectId(req.params.id.toString());
    Company.find({_id: id}, (err, found)=>{
        if (err)console.log(err);
        else res.json(found);
    })
})
// ADD A COMPANY

router.post('/add', (req, res)=>{
 
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


// ADD FILTERS TO THE COMPANIES LIST

router.post('/filters' ,(req,res) => {
    let type = req.body.type;
    let filter;
  
    if (type===''){
        filter = {
            $and: [
            {package: {$gte: req.body.minPackage}}, 
            {package: {$lte: req.body.maxPackage}}]};
    } else {
        filter = {
            $and: [{type: type}, 
            {package: {$gte: req.body.minPackage}}, 
            {package: {$lte: req.body.maxPackage}}]};
    }
     Company.find(filter, (err, result)=>{
        if (err) console.log(err);
        else res.json(result);
    });
});


// DELETE A COMPANY

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


// UPDATE COMPANY DETAILS

router.put('/:id/put', (req, res)=>{
    const id = ObjectId(req.params.id.toString());
    Company.updateOne({_id: id }, req.body,  (err, result)=>{
        if (err)res.json(err);
        else {
            Company.find({}, (err, companies)=>{
                if (err)console.log(err);
                else res.json(companies);
            });
        }
    });
});


module.exports = router;