const express = require('express')
const app = express()

app.get('/',  (req, res) => {
  res.send('Hello World')
});

var customers = [
  {id:1, name:'Vivek', email:'vivek@abcd.com', phone:'1234567899', address:'India'},
  {id:2, name:'Rama', email:'rama@abcd.com', phone:'wwwww', address:'Asia'},
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

// REST API

app.listen(3000)