var express = require('express');
var router = express.Router();
var Products = require('../model/Products');

// Get all products


/* GET home page. */
// router.get('/', function (req, res, next) {
//     console.log("herer api reoute")
//     Products.find({}).then((data) => {
//             console.log('product form datadag: ', data)
//             res.json(data)
//     });
// }
// );

router.get('/', function(req, res, next) {
    Products.find({}).then(function(data){
        console.log('Here api route products fin')
      return res.json({data: data});
    }).catch(next);
  });




module.exports = router;
