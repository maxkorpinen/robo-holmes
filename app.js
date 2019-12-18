const express = require('express');
const app = express()
const port = 3000
var path = require('path');
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const { Board, Motors, Servo } = require("johnny-five");
var board = new Board();
const invertPWM = true;

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

board.on("ready", () => {
    motors = new Motors([
        { pins: { dir: 4, pwm: 5 }, invertPWM },
        { pins: { dir: 12, pwm: 11 }, invertPWM }
    ]);

    servo = new Servo(
        {
            pin: 6,
            range: [10, 80],
            startAt: 'min'
        }
    );
});

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

    //Camera servo controls
    socket.on('moveup', function () {
        servo.move(90);
    });

    socket.on('movedown', function () {
        servo.move(30);
    });

});
