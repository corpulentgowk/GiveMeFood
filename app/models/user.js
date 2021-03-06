// grab the mongoose module
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  
    firstname: {type:String, required: true, index:true},
    lastname: {type:String, required: true, index:true},
    email: {type:String, required: true, unique:true},
    password: {type: String, required:true},
    admin: {type: Boolean, default:false}
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
