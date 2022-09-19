var express = require('express');
var router = express.Router();
const { Sequelize } = require('sequelize');
const Person = require('../models/Person');
// end point is  /api/customer
// method get ==>  get records
//https://sequelize.org/master/manual/model-querying-basics.html
router.get('/', async(req, res, next) => {
  await Person.findAll().then((result)=>{
    res.send(result);
  })
});

router.get('/:id', async (req, res, next) => {
    await Person.findOne({
      where:{id:req.params.id}
    }).then((result)=>{
    res.send(result);
  })
 // res.send(model.getCustomerById(req.params.id));
});

// method post ==>  add record
router.post('/', async (req, res, next) => {
  const person = await Person.create(req.body);
  res.send({result:'success', msg:"customer added successfully"});
  });

// method delete ==>  delete record
router.delete('/', async (req, res, next) => {
   console.log("req.body:"+ JSON.stringify(req.body));
  const person = await Person.destroy(
    { where: { id: req.body.id } }
  ).then(result =>
    res.send({result:'success', msg:"customer deleted successfully"}),
  err =>
    res.send({result:'fail', msg:"customer updatation failed"})
  )
  });

  router.get('/search/:field/:searchText', async (req, res, next) => {
    const Op = Sequelize.Op;
    let data = await Person.findAll({
      where: {
        [req.params.field]: {
          [Op.like]: '%'+req.params.searchText+'%'
        }
      }
    });
    res.send(data);
  });

// method put ==>  update record
router.put('/', async (req, res, next) => {
  const person = await Person.update(req.body,
    { where: { id: req.body.id } }
  ).then(result =>
    res.send({result:'success', msg:"customer updated successfully"}),
  err =>
    res.send({result:'fail', msg:"customer updatation failed"})
  )
  });
  
module.exports = router;
