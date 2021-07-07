var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
// 여러가지 모듈을 불러오는 부분.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');
var fitMovieRouter = require('./routes/fitMovie');
var loginRouter = require('./routes/login');
// routes의 경로를 변수명으로 지정하고 아래 app.use('/', routes) 
//부분으로 경로를 넘겨준다.

var app = express();

app.set('views', path.join(__dirname, 'views'));
// 해당되는 디렉터리 위치를 절대경로로 알려줌
app.set('view engine', 'jade');
// view engine 으로 jade (pug) 사용


// app.use는 보통 우리가 원하게끔 커스터마이징할 때 사용.
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/fitMovie',fitMovieRouter);
app.use('/login',loginRouter);

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
