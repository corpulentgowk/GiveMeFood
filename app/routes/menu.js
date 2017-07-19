var express = require('express');
var router = express.Router();

var Resturant = require('../models/resturant')
//Helper Functions for Restrictions
var acceptedKeys = ["name", "items"];
function checkKeys(key) {	
    return acceptedKeys.includes(key)
}

router.get('/menus/:id', function(req, res, next){ //returns menu for a resturants with specified id

	Resturant.findOne({name: req.params.id}, function(err, resturant) {
	   	if (err){
	   		res.json(err); 
	   		return;
	   	} 
	   	res.json(resturant.menus);
	});
});

router.post('/create/menu/:id', function(req,res){
	var conditions = { name: req.params.id }
	  , update = {$addToSet: {menus: req.body }}
	  , options = {upsert: true};

	Resturant.findOne({name: req.params.id}, function(err, resturant) {
	   	if (err){res.json(err); return;}

   		if (!resturant){
   			res.status(404).json({"error":"Resturant does not exist"});
   			return;
   		}
   		var menus = resturant.menus;
		for (var i = 0; i < menus.length; i++){ 
    		if (menus[i].name == req.body.name){
    			res.status(200).json({"code":11000, "errmsg": "duplicate key error"});
    			return;
    		}
		}
		
		var valid = Object.keys(resturant).every(checkKeys); 
		if (!valid){
			res.status(400).json({"status":"Keys are invalid.", "Allowed keys": acceptedKeys})
			return;
		}	

	Resturant.update(conditions, update, options, function (err, resturant) { //must be nested in the findeOne call back or else it will create a fake 
 		 if (err){res.json(err); return;} 
  			res.json({"status":"success"});
		});
});

});

module.exports = router;