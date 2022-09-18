
// customer-mysql.js
const getCustomerSql = function(){
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from customer', function (error, results, fields) {
        if (error) {
            resolve([]);
            throw error;
        }else{
            resolve(results);
        }
        });
    });
  }
  
  // index.js 
  //with promise
  router.get('/dashboard', async function(req, res, next) {
      res.render('dashboard', { title: 'Dashboard',customers:await getCustomerSql() });
  });