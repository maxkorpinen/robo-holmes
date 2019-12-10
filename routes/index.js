var express = require('express');
var router = express.Router();
var five = require('johnny-five');
var board = new five.Board();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.io.emit("socketToMe", "index");
});

board.on('ready', function () {
  var speed, commands, motors;
  motors = {
      a: new five.Motor([3, 12]),
      b: new five.Motor([11, 13])
  };

  commands = null;

  io.on('connection', function (socket) {
      socket.on('stop', function () {
          motors.a.stop();
          motors.b.stop();
      });

       socket.on('start', function () {
           //speed = 255;
           //motors.a.fwd(speed);
           //motors.b.fwd(speed);
           console.log('start');
       });

      socket.on('reverse', function () {
          speed = 120;
          motors.a.rev(speed);
          motors.b.rev(speed);
      });

      socket.on('left', function () {
          var aSpeed = 220;
          var bSpeed = 50;
          motors.a.fwd(aSpeed);
          motors.b.rev(bSpeed);
      });

      socket.on('right', function () {
          var aSpeed = 50;
          var bSpeed = 220;
          motors.a.rev(aSpeed);
          motors.b.fwd(bSpeed);
      });
  });
});


module.exports = router;
