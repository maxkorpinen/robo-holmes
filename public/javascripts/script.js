/***********************************************
 * VIDEO STREAM
***********************************************/

var canvas = document.getElementById('video-canvas');
var url = 'ws://'+document.location.hostname+':8082/';
var player = new JSMpeg.Player(url, {canvas: canvas});

/***********************************************
 * CONTROLS
***********************************************/

var socket = io('http://localhost:3000');

socket.on('socketToMe', function (data) {
    console.log(data);
});

document.getElementById("forward").addEventListener("click", forward);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reverse").addEventListener("click", reverse);
document.getElementById("right").addEventListener("click", right);
document.getElementById("left").addEventListener("click", left);


function forward() {
    socket.emit('forward', 'moving forward');
    return false;
}

function stop() {
    socket.emit('stop', 'stopping motors');
    return false;
}

function reverse() {
    socket.emit('reverse', 'moving reverse');
    return false;
}

function right() {
    socket.emit('right', 'moving right');
    return false;
}

function left() {
    socket.emit('left', 'moving left');
    return false;
}