var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));
console.log('My server is running');

var io = socket(server);
io.sockets.on('connection', function(socket) {
	console.log('New connection: ' + socket.id);
});