module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	var resturant = require('./routes/resturant');
	app.use('/', resturant); // associate with API 

	var item = require('./routes/item');
	app.use('/api', item); // associate with API

	// frontend routes =========================================================
	// route to handle all angular requests


	// View engine
	var path = require('path');
	app.set('views', path.join(__dirname, 'views')); // views will be in views folder
	app.set('view engine', 'ejs'); // specify engine
	app.engine('html', require('ejs').renderFile); // ability to render html files	

	//Specify the location of all the routes
	//app.use('/', index); // want the homepage to be associated w/ index route from line 5




};