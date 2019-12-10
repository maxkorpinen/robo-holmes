var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { Board, Motors } = require("johnny-five");
var board = new Board();
const invertPWM = true;

var indexRouter = require('./routes/index');

var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function (req, res, next) {
//     res.io = io;
//     next();
// });
app.use('/', indexRouter);

var motors;

board.on("ready", () => {
    /**
     * Motor A: PWM 5, dir 4
     * Motor B: PWM 11, dir 12
     */
    motors = new Motors([
        { pins: { dir: 4, pwm: 5 }, invertPWM },
        { pins: { dir: 12, pwm: 11 }, invertPWM }
    ]);
});

io.on('connection', function (socket) {
    console.log('a user connected');
    
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('forward', function () {
        motors.forward(255);
    });

    socket.on('stop', function () {
        motors.stop();
    });
});

/*
io.on('connection', function (socket) {
    socket.on('forward', function (msg) {
        console.log('message: ' + msg);
    });
});
*/

module.exports = {app: app, server: server};
