var express = require('express');
var router = express.Router();
const {getCustomer, getCustomerById} = require('../services/customer-service')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
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
  res.render('customer', { title: 'Customer',data:getCustomer() });
});

router.get('/customer/add', function(req, res, next) {
  res.render('add-customer', { title: 'Add Customer' });
});

router.get('/customer/edit/:id', function(req, res, next) {
   console.log("id is ",req.params.id);
   const customer = getCustomerById(req.params.id);
  res.render('edit-customer', { title: 'Update Customer', record:customer });
});
module.exports = router;
