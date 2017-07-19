var express = require('express');
var router = express.Router();

var User = require('../models/user');
var encrypt = require('../../config/encryptTool')

router.post('/signup', function(req,res){
  console.log(req.body);

  encrypt.cryptPassword(req.body.password, function(err, hash){
      if (!err){
        req.body.password = hash;
        console.log(req.body.password);
        User.create(req.body, function (err, item) {
           if (err){
            res.json(err);
            return;
           } 
              res.json({"status":"success"});
          });
      }
      else{
        res.json({"status":"There was an unexpected error creating your account. Please try again."})
      }
    });
});

router.post('/login', function (req, res, next) {
   var emailAddr = req.body.email;
   var pass = req.body.pass;

   User.findOne({email:emailAddr}, function(err, user) {
      if(err) return next(err);
      if(!user) return res.send('Not logged in!');
      encrypt.comparePassword(req.body.password, user.password, 
        function(err, isMatch){
            if (err){res.json(err); return;}
            if (isMatch){
                req.session.user = user;
                return res.json({"status":"Logged In!"});
            }
            else{
              req.session.user = null;
              return res.json({"status":"Password Incorrect"})
            }
          }
        );
    });
});


router.get('/logout', function (req, res) {
   req.session.user = null;
   return res.json({"status": "success"})
});

router.get('/current_user', function (req, res) {
   //req.session.user = null;
   return res.send(req.session.user.email)
});

router.get('/is_admin', function (req, res) {
  if (req.session.user){
   return res.json({"status":req.session.user.admin});
  }
  else{
    return res.json({"status":false});
  }
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