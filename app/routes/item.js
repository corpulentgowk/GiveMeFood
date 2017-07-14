var express = require('express');
var router = express.Router();

var Item = require('../models/item');

router.get('/items', function(req, res, next){

	Item.find({}, function(err, items) {
	   	if (err){
 		 	res.json(err);
 		 	return;
 		 } 
  			
  		res.json(items);
	});
});

router.get('/item/:id', function(req, res, next){
	console.log(req.body);
	Resturant.findOne({name: req.params.id}, function(err, item) {
	   	if (err){
	   		res.json(err); 
	   		return;
	   	} 
	   	//console.log(item);
	   	res.json(item);
	});
});

router.post('/create/item', function(req,res){
	Item.create(req.body, function (err, item) {
 		 if (err){
 		 	res.json(err);
 		 	return;
 		 } 
  			// saved!
  			res.json({"status":"success"});
		});
});

module.exports = router;