// service/CustomerMysql.js  // callback
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'smartant',
  database        : 'nodejs'
});
 
 const getCustomer = ()=> {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from customer', function (error, results, fields) {
         if (error) {
           resolve([]);
           throw error;
         }else{
           resolve(results);
         }
       });
   })
}


const addCustomer = function(customer) {
    return new Promise((resolve, reject) => {
     pool.getConnection(function(err, connection) {
       if(err) { console.log(err); resolve({result:"fail"}); return; }
         connection.query("INSERT INTO customer set ? ",customer, function(err, results) {
         if(err){
          console.log("Error Selecting : %s ",err );
          resolve({result:"fail"});
         }else{
          resolve({result:"success"});
        }
        connection.release();
     });
   });
  });
};


const updateCustomer = function(customer) {
    return new Promise((resolve, reject) => {
       pool.getConnection(function(err, connection) {
     if(err) { console.log(err); resolve({result:"fail"}); return; }
     connection.query("UPDATE customer set ? WHERE id = ? ",[customer,customer.id], function(err, results) {
         if(err){
          console.log("Error Selecting : %s ",err );
          resolve({result:"fail"});
         }else{
          resolve({result:"ok"});
        }
     });
   });
  });
};

const deleteCustomer = function({id}) {
    return new Promise((resolve, reject) => {
       var sql = "delete FROM customer where id='"+id+"'";
       console.log("sql:"+sql);
       pool.getConnection(function(err, connection) {
         if(err) { console.log(err); resolve({result:"ok"});}
         // make the query
         connection.query(sql, function(err, results) {
           connection.release();
           if(err) { console.log(err); resolve({result:"ok"}); }
           resolve({result:"ok"}) ;
         });
       });
  });
};
const getCustomerById = function(id) {
    return new Promise((resolve, reject) => {
    pool.query('SELECT * from customer where id='+id, function (error, results, fields) {
    if (error) {
      resolve({});
      throw error;
    }else{
      if(results.length == 0){
        callback({});
      }else{
        resolve(results[0]);
      }
    }
  });
  });
};

const getCustomersBySearch = function(field, searchText) {
    var recordList = [];
    var sql = "SELECT * FROM customer where "+field+" like '%"+searchText+"%'";
    console.log("sql:"+sql);
    return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if(err) { console.log(err); resolve({}); return; }
      // make the query
      connection.query(sql, function(err, results) {
        connection.release();
        if(err) { console.log(err); resolve({}); return; }
        if(results.length == 0){
          resolve(recordList);
        }else{
          resolve(results);
        }
      });
    });
  });
  };

module.exports = {getCustomersBySearch, getCustomer,addCustomer,updateCustomer,deleteCustomer,getCustomerById};
