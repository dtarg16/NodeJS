const express = require('express')
const app = express()
app.use(express.json());

app.get('/',  (req, res) => {
  res.send('Hello World')
});

var customers = [
  {id:1,name:'Vivek',email:'vivek@abcd.com',phone:'1234567899', address:'India'},
  {id:2,name:'Rama',email:'rama@abcd.com',phone:'wwwww', address:'Asia'},
];
// get getting
app.get('/api/customer',  (req, res) => {
  res.send(customers);
});
app.get('/api/customer/:id',  (req, res) => {
  console.log('id:'+req.params.id);
  let temp = customers.filter((record)=>(record.id == req.params.id));
  if(temp.length > 0){
    res.send(temp[0]);
  }else{
    res.send({})
  }
});

//POST add 
app.post('/api/customer',  (req, res) => {
  var record = req.body;
  record.id = Date.now();
  customers.push(record);
  res.send({result:'ok',msg:'record added successfully'});
});

//PUT  update
app.put('/api/customer',  (req, res) => {
  var record = req.body;
  customers.map((record,index)=>{
    if(record.id == req.body.id){
      customers[index] = req.body;
    }
  })
  res.send({result:'ok',msg:'record updated successfully'});
});

//PUT  update
app.delete('/api/customer',  (req, res) => {
  let temp = customers.filter((record)=>(record.id != req.body.id));
  customers = temp;
  res.send({result:'ok',msg:'record deleted successfully'});
});
// REST API

app.listen(3000)