// service/CustomerMysql.js  // callback
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'smartant',
  database        : 'nodejs'
});
 
 const getCustomer = function(callback){
	pool.query('SELECT * from customer', function (error, results, fields) {
  	if (error) {
  		callback([]);
  		throw error;
  	}else{
  		callback(results);
  	}
	});
}
module.exports = {getCustomer};
