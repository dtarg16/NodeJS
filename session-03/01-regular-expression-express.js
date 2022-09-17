const express = require('express')
const app = express()
//app.js ,index.js , main.js
app.get('/',  (req, res) => {
  res.send('Hello World')
})

app.get('/about',  (req, res) => {
	res.send('Hello About 1')
  });
  app.use((req, res,next)=>{ //all condition
	//res.send('Hello Use');
	next();
  })

  app.get('/hello',  (req, res) => {
	res.send('Hello About 1 hello')
  });

app.post('/about',  (req, res) => {
	res.send('Hello About Post'); //21 
  })

  // will match acd and abcd
  app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
  });
  // will match abcd, abbcd, abbbcd, and so on
  app.get('/ab+cd', function(req, res) {
    res.send('ab+cd');
  });
  // will match abcd, abxcd, abRABDOMcd, ab123cd, and so on
  app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
  });
  // will match /abe and /abcde
  app.get('/ab(cd)?e', function(req, res) {
  res.send('ab(cd)?e');
  });

  // /
  app.all('/about',  (req, res) => {
	res.send('Hello About All');  //26 
  })
app.listen(3000);