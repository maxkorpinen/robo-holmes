var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var movementRouter = require('./routes/movement');

var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// io.on('connection', function (socket) {
//     console.log('a user connected');
// });

app.use(function(req, res, next) {
    res.io = io;
    next();
});

app.use('/', indexRouter);
app.use('/movement', movementRouter);

module.exports = {app: app, server: server};
