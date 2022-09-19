var express = require('express');
var router = express.Router();
const {getCustomer, getCustomerById, getCustomersBySearch} = require('../services/customer-mongo')

router.get('/dashboard', async function(req, res, next) {
    res.render('dashboard', { title: 'Dashboard',customers:await getCustomer() , user:req.session.user });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', user:req.session.user });
});

router.get('/customer', async function(req, res, next) {
  res.render('customer', { title: 'Customer',data:await getCustomer() , user:req.session.user});
});
router.get('/customer/search/:field/:searchWord', async function(req, res, next) {
  res.render('customer', { title: 'Customer',data:await getCustomersBySearch(req.params.field, req.params.searchWord ), user:req.session.user});
});

router.get('/customer/add', function(req, res, next) {
  res.render('add-customer', { title: 'Add Customer', user:req.session.user });
});
router.get('/customer/edit/:id', async function(req, res, next) {
   console.log("id is ",req.params.id);
   const customer = await getCustomerById(req.params.id);
  res.render('edit-customer', { title: 'Update Customer', record:customer , user:req.session.user});
});
module.exports = router;
