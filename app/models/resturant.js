// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var resturantSchema = new Schema({
  
    name: {type:String, required: true, index:true},
    image_url: {type:String, required: true},
    menus: {type: [{}]}
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

