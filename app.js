const express = require('express');
const app = express()
const port = 3000
var path = require('path');
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

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

var five = require("johnny-five");
var io = require('socket.io').listen(server);

var board = new five.Board();

var motorA;
var motorB;
var servo;
var ledRight;
var ledLeft;
var servoPos = 0;

board.on("ready", () => {

    var configs = five.Motor.SHIELD_CONFIGS.ARDUINO_MOTOR_SHIELD_R3_1;

    motorA = new five.Motor(configs.A);
    motorB = new five.Motor(configs.B);

    servo = new five.Servo(
        {
            pin: 6,
            range: [0, 70],
            startAt: servoPos
        }
    );

    ledRight = new five.Led(10);
    ledLeft = new five.Led(7);
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
        motorB.forward(255);
    });

    socket.on('left', function () {
        console.log('left')
        motorA.reverse(255);
        motorB.reverse(255);
    });

    //Camera servo controls

    socket.on('moveup', function () {
        if (servoPos !== 70) {
            servoPos += 35;
            servo.to(servoPos);
        }
    });

    socket.on('movedown', function () {
        if (servoPos !== 0) {
            servoPos-= 35;
            servo.to(servoPos);
        }
    });

    socket.on('off', function() {
            console.log("leds on");
            ledRight.off();
            ledLeft.off();
    })

    socket.on('on', function() {
        console.log("leds off");
        ledRight.on();
        ledLeft.on();
    })
});
