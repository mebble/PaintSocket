var socket;

function setup() {
	createCanvas(400, 400);
	background('#000');

	socket = io.connect('http://localhost:3000');
	socket.on('mouse', newDrawing);
}

function draw() {

}

function newDrawing(data) {
	noStroke();
	fill('#ff0000');
	ellipse(data.x, data.y, 30, 30)
}

function mouseDragged() {
	noStroke();
	fill('#fff');
	ellipse(mouseX, mouseY, 30, 30);

	var data = {
		x: mouseX,
		y: mouseY
	};
	socket.emit('mouse', data);
	console.log('Sending:', mouseX, mouseY);
}