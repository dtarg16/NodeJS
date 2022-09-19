var express = require('express');
var app = express.Router();
const {getCustomer, getCustomerById, addCustomer, updateCustomer, deleteCustomer} = require('../services/customer-mysql')

  app.get('/',  async (req, res) => {
    res.send(await getCustomer());
  });
  app.get('/:id', async (req, res) => {
    let record = await getCustomerById(req.params.id);
    res.send(record);
  });
  
  //POST add 
  app.post('/',  async (req, res) => {
    var record = req.body;
    await addCustomer(record);
    res.send({result:'ok',msg:'record added successfully'});
  });
  
  app.put('/',  async (req, res) => {
    var record = req.body;
    await updateCustomer(record);
    res.send({result:'ok',msg:'record updated successfully'});
  });
  
  app.delete('/', async  (req, res) => {
    await deleteCustomer(req.body);
    res.send({result:'ok',msg:'record deleted successfully'});
  });


module.exports = app;
