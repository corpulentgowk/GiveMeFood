var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/signup', function(req,res){
  console.log(req.body);
  User.create(req.body, function (err, item) {
     if (err){
      res.json(err);
      return;
     } 
        // saved!
        res.json({"status":"success"});
    });
});

router.post('/login', function (req, res, next) {
   var email = req.body.email;
   var pass = req.body.pass;

   User.findOne(req.body, function(err, user) {
      if(err) return next(err);
      if(!user) return res.send('Not logged in!');

      req.session.user = email;
      return res.send('Logged In!');
   });
});

router.get('/logout', function (req, res) {
   req.session.user = null;
   return res.json({"status": "success"})
});

router.get('/current_user', function (req, res) {
   //req.session.user = null;
   return res.send(req.session.user)
});

module.exports = router;

/*

function isLoggedIn (req, res, next) {
  if (!(req.session && req.session.user)) {
    return res.send('Not logged in!');
  }
  next();
}
And use it on the private routes

app.get("/api", isLoggedIn, function (req, res) {
   //Something private
})

*/