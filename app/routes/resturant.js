var express = require('express');
var router = express.Router();

var Resturant = require('../models/resturant')

router.get('/resturants', function(req, res, next){

	Resturant.find({}, function(err, resturants) {
	   	if (err){
	   		res.json(err); 
	   		return;
	   	} 
	   	res.json(resturants);
	});
});

router.get('/resturant/:id', function(req, res, next){
	Resturant.findOne({name: req.params.id}, function(err, resturant) {
	   	if (err){
	   		res.json(err); 
	   		return;
	   	} 
	   	res.json(resturant);
	});
});

router.post('/create/resturant', function(req,res){

	//var example = {"name": "McDonalds", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png", "menus" : [{"name":"Regular Menu", "items": ["A", "B"]}, {"name":"Lunch Menu", "items": ["C", "D"]}]};
	
	Resturant.create(req.body, function (err, resturant) {
 		 if (err){
 		 	res.json(err); 
 		 	return;
 		 } 
  			// saved!
  			res.json({"status":"success"});
		});
});

module.exports = router;
