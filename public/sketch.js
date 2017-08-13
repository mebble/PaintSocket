var socket;

function setup() {
	createCanvas(400, 400);
	background('#000');

	socket = io.connect('http://localhost:3000');
}

function draw() {

}

function mouseDragged() {
	noStroke();
	fill('#fff');
	ellipse(mouseX, mouseY, 40, 40);

	var data = {
		x: mouseX,
		y: mouseY
	};
	socket.emit('mouse', data);
	console.log('Sending:', mouseX, mouseY);
}