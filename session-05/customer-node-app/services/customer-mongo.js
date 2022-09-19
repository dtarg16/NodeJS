// npm i mongodb
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;

const dbName = 'nodejs';
const url = 'mongodb://localhost:27017';

const getCustomer = function(){ 
  return new Promise((resolve, reject) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true},
    function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
      db.collection('customers').find().toArray(function (err, result) {
        if (err) throw err
        //console.log(result);
        client.close();
        resolve(result);
      });
  });
  });
};

const getCustomersnodeCallback = function(callback){ 
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true},
    function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
      db.collection('customers').find().toArray(function (err, result) {
        if (err) throw err
        console.log(result);
        callback(result);
      });
    client.close();
  });
};

const getCustomerById = function(id){
  return new Promise((resolve, reject) => {
  var record = {};
    console.log(">> getCustomerById "+ id);
    MongoClient.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true }, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
      db.collection('customers').find({"_id" : ObjectId(id)}).toArray(function (err, result) {
        if (err) throw err
        console.log(result);
        resolve(result[0]);
        client.close();
      });
      });
  });
};

const addCustomer = function(record) {
  return new Promise((resolve, reject) => {
  MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true },function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    const collection = db.collection('customers');
    collection.insertMany([record],function(err,result){
      resolve({result:'success'});
      client.close();
    });
    });
  });
}

const deleteCustomer = function(id){
  return new Promise((resolve, reject) => {
  MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true },function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    const collection = db.collection('customers');
    collection.deleteOne({"_id" : ObjectId(id)},function(err,result){
      resolve({result:'success'});
      client.close()
    });
     });
  });
};

const updateCustomer = function(customer){
  return new Promise((resolve, reject) => {
    let id = customer.id;
    delete(customer.id);
    MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true },function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    const collection = db.collection('customers');
    collection.updateOne({"_id" : ObjectId(id)},{ $set: customer },function(err,result){
      resolve({result:'success'});
      client.close();
       });
    });
  });
};

const getCustomersBySearch = function(field,searchText){
  return new Promise((resolve, reject) => {
    var records = [];
    //searhObject[searchParam.field] = "/"+searchParam.searchword+"/i";
    //console.log("search ==> "+JSON.stringify(searchParam));
    console.log("field:"+field);
    console.log("searchText:"+searchText);

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
      db.collection('customers').find({[field]:{'$regex' : searchText, '$options' : 'i'}}).toArray(function (err, result) {
        if (err) throw err
        console.log("result:"+JSON.stringify(result));
        resolve(result);
        client.close();
         });
      });
  });
}
//sqlService.getCustomersBySearch(searchParam,callback);
const getCustomersBySearchOLD = function(searchParam){
  return new Promise((resolve, reject) => {
    var records = [];
    //searhObject = {searchParam.field: '//i'}
    MongoClient.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true }, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
      db.collection('customers').find({name: /vivek/i}).toArray(function (err, result) {
        if (err) throw err
        console.log("result:"+JSON.stringify(result));
        resolve(result);
        client.close();
         });
      });
   ;
  });
}

module.exports = {getCustomer,addCustomer,updateCustomer,deleteCustomer,getCustomerById,getCustomersBySearch};
