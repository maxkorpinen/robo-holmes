const express = require('express');
const app = express()
const port = 3000
var path = require('path');
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const five = require("johnny-five");

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.io = io;
    next();
});

var io = require('socket.io').listen(server);

var board = new five.Board();
// const invertPWM = true;
var motorA;
var motorB;

board.on("ready", () => {

    var configs = five.Motor.SHIELD_CONFIGS.ARDUINO_MOTOR_SHIELD_R3_1;

    motorA = new five.Motor(configs.A);
    motorB = new five.Motor(configs.B);

    // servo = new Servo(
    //     {
    //         pin: 6,
    //         range: [10, 80],
    //         startAt: 'min'
    //     }
    // );
});

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('forward', function () {
        console.log('forward')
        motorA.forward(255);
        motorB.reverse(255);
    });

    socket.on('stop', function () {
        console.log('stop')
        motorA.stop();
        motorB.stop();
    });

    socket.on('reverse', function () {
        console.log('reverse')
        motorA.reverse(255);
        motorB.forward(255);
    });

    socket.on('right', function () {
        console.log('right')
        motorA.forward(255);
        motorB.forward(220)
    });

    socket.on('left', function () {
        console.log('left')
        motorA.reverse(220);
        motorB.reverse(255);
    });

    //Camera servo controls
    socket.on('moveup', function () {
        servo.move(90);
    });

    socket.on('movedown', function () {
        servo.move(30);
    });
});
