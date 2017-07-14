// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  
    name: {type:String, required: true, index:true},
    email: {type:String, required: true},
    password: {type: String, required:true}
});

var user = mongoose.model('User', userSchema);

user.on('index', function(err) {
    if (err) {
        console.error('User index error: %s', err);
    } else {
        console.info('User indexing complete');
    }
});

module.exports = user;
