
var socket = io('http://localhost:3000');

socket.on('socketToMe', function (data) {
    console.log(data);
});

/*function moveForward(){
    socket.emit('start');
}
function turnRight(){
    socket.emit('right');
}
function turnLeft(){
    socket.emit('left');
}
function moveReverse(){
    socket.emit('reverse');
}
function stop(){
    socket.emit('stop');
}

document.getElementById('forward').onclick = moveForward;
document.getElementById('right').onclick = turnRight;
document.getElementById('left').onclick = turnLeft;
document.getElementById('reverse').onclick = moveReverse;
document.getElementById('stop').onclick = stop;*/

document.getElementById("forward").addEventListener("click", forward);
document.getElementById("stop").addEventListener("click", stop);

function forward() {
    socket.emit('forward', 'moving forward');
    return false;
}

function stop() {
    socket.emit('stop', 'stopping motors');
    return false;
}