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
	console.log(req.body);
	Resturant.findOne({name: req.params.id}, function(err, resturant) {
	   	if (err){
	   		res.json(err); 
	   		return;
	   	} 
	   	console.log(resturant);
	   	res.json(resturant);
	});
});


router.post('/create/resturant', function(req,res){

	var saveThis = [{"name": "McDonalds","menus" : [{"name":"Regular Menu", "items": ["A", "B"]}, {"name":"Lunch Menu", "items": ["C", "D"]}]}];

	Resturant.create(saveThis, function (err, resturant) {
 		 if (err){res.json(err); return;} 
  			// saved!
  			console.log(resturant);
  			res.json({"status":"success"});
		});
});

module.exports = router;





/*  




			var newUser = Resturant({
		  name: 'Peter Quill'
		});

		// save the user
		newUser.save(function(err) {
		  if (err) throw err;

		  console.log('Resturant created!');
		});

*/