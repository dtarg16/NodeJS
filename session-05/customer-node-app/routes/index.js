var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/login');
});

router.get('/login', function(req, res, next) {
  delete(req.session.user);
  res.render('login', { title: 'Login' });
});
module.exports = router;
