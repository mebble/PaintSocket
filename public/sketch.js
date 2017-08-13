var socket;

function setup() {
	createCanvas(400, 400);
	socket = io.connect('http://localhost:3000');
}

function draw() {
	background('#000');
	ellipse(mouseX, mouseY, 40, 40);
}