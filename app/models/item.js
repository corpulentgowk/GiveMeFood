// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: {type: String, index: true, unique: true, required: true},
    price: {type: Number, required: true},
	});

var item = mongoose.model('Item', itemSchema);

item.on('index', function(err) {
    if (err) {
        console.error('Item index error: %s', err);
    } else {
        console.info('Item indexing complete');
    }
});

module.exports = item;

