// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var resturantSchema = new Schema({

    name: {type: String, index: true, unique: true, required: true},
    image_url: {type:String, required: true},
    menus:[
		  {
		  	name: {
		    type: String, 
		    required: true, //name for menu is required
		    unique: true,
		    index: true
		  },
		  items: { 
		    type: Array,
		    required: true
		  }
		}]
});

var resturant = mongoose.model('Resturant', resturantSchema);

resturant.on('index', function(err) {
    if (err) {
        console.error('Resturant index error: %s', err);
    } else {
        console.info('Resturant indexing complete');
    }
});

module.exports = resturant;

