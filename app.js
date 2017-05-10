var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Twit = require('twit');

var index = require('./routes/index');
var users = require('./routes/users');
var tuitsearch = require('./routes/tuitsearch');
var mongodb = require('./routes/mongodb');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/tuitsearch', tuitsearch);
app.use('/mongodb', mongodb);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//twit confing
var T = new Twit({
  consumer_key: 'CtnSB5gksgtXqip74NjD6KD4p',
  consumer_secret: '1tmULEY7tIDUi7ZrjcShsgkMyRQlyBcnF8hjAsihbk2QSFaJM7',
  app_only_auth: true
  //access_token: '	844261634-lPlhwjAWngSIIHPxqHhMpjM19MEA5fWtSiJFxFXG',
  //access_token_secret: '7f4QDpgtwnvUPJBK8Sv9lOJMd8e02WpOzBJgwdxIv620Q'
});

io.on('connection', function(socket) {  
    socket.emit('announcements', { message: 'A new user has joined!' });
    socket.on('query', function(data){
      console.log('Mensaje Cliente-> ', data.palabra+data.count);
      buscar();
    })
    
});
var stream = T.stream('statuses/filter', { track: ['macron'] });
stream.on('connect', function(request){
    console.log('connect');
  });
  stream.on('connected', function(response){
    console.log('connected');
  });
  stream.on('tweet', function (tweet) {
    console.log('en el stream');
    console.log(tweet);
    //socket.emit('tuits', {tuits: tweet});
    console.log('despues en el stream');
  });
  stream.on('error', function(response){
    console.log('error');
    console.log(response);
  });
  stream.on('warning', function(response){
    console.log('warning');
    console.log(response);
  });


var buscar = function(){
  console.log('buscar');
  
};

module.exports = app;
//server.listen(5000);
var port = process.env.PORT || 5000;
server.listen(port, function () {
  console.log('Listening on ' + port);
});