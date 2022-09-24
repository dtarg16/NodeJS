const env = {
  database: 'db_sequelize',
  username: 'root',
  password: 'smartant',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  },
  jwtSecret: 'w$n8mn*t7k$$gkg%+7h(eh_jo)4sp8pxj+8g_mvdqn*7f0u'
};

module.exports = env;