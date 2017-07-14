var express = require('express');
var router = express.Router();

var Item = require('../models/item')

router.get('/items', function(req, res, next){

	Item.find({}, function(err, resturants) {
	   	if (err){
 		 	res.json(err);
 		 	return;
 		 } 
  			
  		res.json(resturants);
	});
});

router.post('/create/item', function(req,res){
	Item.create(req.body, function (err, resturant) {
 		 if (err){
 		 	res.json(err);
 		 	return;
 		 } 
  			// saved!
  			res.json({"status":"success"});
		});
});

module.exports = router;