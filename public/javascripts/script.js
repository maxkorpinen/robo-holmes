var socket = io('http://localhost:3000');

socket.on('socketToMe', function (data) {
    console.log(data);
});

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

/*
$(function () {
    var socket = io();
    $('form').submit(function (e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
});
*/