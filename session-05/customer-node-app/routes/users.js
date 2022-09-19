var express = require('express');
var router = express.Router();

//users URL
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  if(req.body.username == req.body.password && typeof(req.body.username) != 'undefined'){
    req.session.user = req.body.username;
    res.send({result:'success',msg:'User Login Successfully'});
  }else{
    res.send({result:'fail',msg:'User Login failed'});
  } 
});

module.exports = router;
