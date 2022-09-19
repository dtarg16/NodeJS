var express = require('express');
var app = express.Router();
const {getCustomer, getCustomerById, addCustomer, updateCustomer, deleteCustomer} = require('../services/customer-service')

  app.get('/',  (req, res) => {
    res.send(getCustomer());
  });
  app.get('/:id',  (req, res) => {
    let record = getCustomerById(req.params.id);
    res.send(record);
  });
  
  //POST add 
  app.post('/',  (req, res) => {
    var record = req.body;
    addCustomer(record);
    res.send({result:'ok',msg:'record added successfully'});
  });
  
  app.put('/',  (req, res) => {
    var record = req.body;
    updateCustomer(record);
    res.send({result:'ok',msg:'record updated successfully'});
  });
  
  app.delete('/',  (req, res) => {
    deleteCustomer(req.body);
    res.send({result:'ok',msg:'record deleted successfully'});
  });


module.exports = app;
