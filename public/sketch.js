var socket;
var client;

function setup() {
	createCanvas(400, 400);
	background('#000');

	socket = io.connect('http://localhost:3000');
	socket.on('mouse', newDrawing);  //receive msg from server
	client = {
		size: 30,
		color: 'rgb(' + floor(random(255)) + ', '
					  + floor(random(255)) + ', '
					  + floor(random(255)) + ')'
	};
}

function draw() {

}

function newDrawing(data) {
	noStroke();
	fill(data.color);
	ellipse(data.x, data.y, data.size, data.size);
}

function mouseDragged() {
	noStroke();
	fill(client.color);
	ellipse(mouseX, mouseY, client.size, client.size);

	var data = {
		x: mouseX,
		y: mouseY,
		color: client.color,
		size: client.size
	};
	socket.emit('mouse', data); //send msg to server
	console.log('Sending:', mouseX, mouseY);
}