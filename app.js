var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { Board, Motors } = require("johnny-five");
var board = new Board();
const invertPWM = true;

var indexRouter = require('./routes/index');
var movementRouter = require('./routes/movement');

var app = express();

app.use(cors());

var allowedOrigins = "http://localhost:*";

var server = require('http').Server(app);
var io = require('socket.io')(server, {
    origins: allowedOrigins
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.io = io;
    next();
});

app.use('/', indexRouter);
app.use('/movement', movementRouter);

// Define motors as global variables, and give values when board is recognized

var motors;

board.on("ready", () => {
    motors = new Motors([
        { pins: { dir: 4, pwm: 5 }, invertPWM },
        { pins: { dir: 12, pwm: 11 }, invertPWM }
    ]);
});

// Listen to socket.io commands when connection is established

io.on('connection', function (socket) {
    console.log('a user connected');
    
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('forward', function () {
        motors.forward(100);
    });

    socket.on('stop', function () {
        motors.stop();
    });

    socket.on('reverse', function () {
        motors.reverse(100);
    });

    socket.on('right', function () {
        motors[0].forward(70);
        motors[1].forward(10);
    });

    socket.on('left', function () {
        motors[0].forward(10);
        motors[1].forward(70);
    });
});

module.exports = {app: app, server: server};
