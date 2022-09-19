const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');//logs

const indexRouter = require('./routes/index'); // routes 
const usersRouter = require('./routes/users'); // routes 
const apiCustomerRouter = require('./routes/apiCustomer');
const  apiPersonRouter = require('./routes/apiPerson');
const  secureRouter = require('./routes/secure-pages');
//const session = require('express-session')
const session = require('cookie-session')

const app = express();

var sess = {
  name: 'customerapp',
  secret: 'keyboard cat',
  cookie: {},
  proxy: true,
  resave: true,
  saveUninitialized: true
}
app.use(session(sess));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// readFile()
app.use('/', indexRouter); //  /
app.use('/users', usersRouter);

//handle security
app.use(function(req,res,next){
  if(req.session.user && req.session.user.length > 2 ){
    next();
  }else{
    res.redirect('/login')
  }
})
app.use('/', secureRouter);
app.use('/api/customer', apiCustomerRouter);
app.use('/api/person', apiPersonRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
