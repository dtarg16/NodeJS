var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Customer App' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/customer', function(req, res, next) {
  res.render('index', { title: 'Customer' });
});
module.exports = router;
