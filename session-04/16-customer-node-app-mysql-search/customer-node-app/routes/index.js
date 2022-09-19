var express = require('express');
var router = express.Router();
const {getCustomer, getCustomerById, getCustomersBySearch} = require('../services/customer-mysql')
//const {getCustomerSql} = require('../services/customer-mysql')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
});

//with promise
router.get('/dashboard', async function(req, res, next) {
    res.render('dashboard', { title: 'Dashboard',customers:await getCustomer() });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/customer', async function(req, res, next) {
  res.render('customer', { title: 'Customer',data:await getCustomer() });
});
router.get('/customer/search/:field/:searchWord', async function(req, res, next) {
  res.render('customer', { title: 'Customer',data:await getCustomersBySearch(req.params.field, req.params.searchWord )});
});

router.get('/customer/add', function(req, res, next) {
  res.render('add-customer', { title: 'Add Customer' });
});

router.get('/customer/edit/:id', async function(req, res, next) {
   console.log("id is ",req.params.id);
   const customer = await getCustomerById(req.params.id);
  res.render('edit-customer', { title: 'Update Customer', record:customer });
});
module.exports = router;
