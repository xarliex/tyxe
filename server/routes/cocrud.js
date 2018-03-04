const express = require("express");
const router = express.Router();
const Company = require("../models/Company");
const debug = require('debug')("server:cocrud");
const multer = require('multer');
const upload = multer({dest:'./public/uploads/'});


//CREATE NEW
router.post('/newcompany',upload.single('image'),(req,res,next)=>{
  console.log(req.body)
    const {tickerName,tickerDescription,tickerImg,mktCap,totalShares,percentage,avbShares,tickerPrice} = req.body;
    if (!tickerName || !tickerDescription || !mktCap || !totalShares ||!percentage || !avbShares || !tickerPrice) return res.status(400).json({ message: 'Please fill in all details' })
    Company.findOne({ tickerName }, '_id')
      .then(company =>{
        if (company !== null) return res.status(400).json({ message: 'The company already exists' });

        const theCompany = new Company({
            tickerName, 
            tickerDescription,
            tickerImg,
            mktCap,
            totalShares,
            percentage,
            avbShares,
            tickerPrice
        });
  
        theCompany.save() 
            .then(company => {
              debug(`Registered company ${company._id} with ticker: ${company.tickerName}`);
              res.status(200).json(req.company)
            }) 
            .catch(e => res.status(500).json(e))
      })
      .catch(e => {
        console.log(e);
        res.status(500).json(e)
      }) 
  });

// RETRIEVE 
  // Retrieve all
  router.get('/list', function (req, res, next) {
    debug(`Retrieving all`);
    Company.find()
      .then(list => {
          console.log(list)
          res.status(200).json(list)
    })
      .catch(e => {
          res.status(500).json(e)
        })
  });

  // Retrieve one
  router.get('/:id', function (req, res, next) {
    debug(`Retrieving id: ${req.params.id}`)
    Company.findById(req.params.id)
      .then(list => res.status(200).json(list))
      .catch(e => res.status(500).json(e))
  });

/* U => UPDATE */

router.put("/edit/:id", (req, res, next)=>{
    Company.findById(req.params.id, (err, company) => {
        // if (req.file === undefined) {
        //     a = company.tickerImg;
        // } else {
        //     a = req.;
        // } 

        let updates = {
            tickerName:req.body.tickerName,
            tickerDescription:req.body.tickerDescription,
            mktCap:req.body.mktCap,
            totalShares:req.body.totalShares,
            percentage:req.body.percentage,
            avbShares:req.body.avbShares,
            tickerPrice: req.body.tickerPrice,
            tickerImg : req.body.tickerImg
        } 

    Company.findByIdAndUpdate(req.params.id, updates, {new: true})
        .then(newCompany => res.status(200).json({ message: 'Company updated successfully' }))
        .catch(e => res.status(500).json(e));
    });
});

// DELETE 
// router.get("/delete/:id", (req, res) => {
//     const id = req.params.id;
  
//     Company.findByIdAndRemove(id, (err, company) => {
//       if (err) {
//         return next(err);
//       }
//       return res.redirect("/companies/list");
//     });
//   });

  router.get('/delete/:id', function (req, res, next) {
    Company.findByIdAndRemove(req.params.id)
      .then(() => res.status(200).json({ message: 'removed' }))
      .catch(e => res.status(500).json(e))
  });

module.exports = router;
