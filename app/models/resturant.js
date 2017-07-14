// grab the mongoose module
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var resturantSchema = new Schema({
  
    name: {type:String, required: true, index:true},
    image_url: {type:String, required: true},
    menus: {type: [{}]}
});

resturantSchema.plugin(uniqueValidator);
var resturant = mongoose.model('Resturant', resturantSchema);

resturant.on('index', function(err) {
    if (err) {
        console.error('Resturant index error: %s', err);
    } else {
        console.info('Resturant indexing complete');
    }
});

module.exports = resturant;

