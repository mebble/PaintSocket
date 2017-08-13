var socket;

function setup() {
	createCanvas(400, 400);
	background('#000');

	socket = io.connect('http://localhost:3000');
}

function draw() {

}

function mouseDragged() {
	console.log(mouseX, mouseY);
	noStroke();
	fill('#fff');
	ellipse(mouseX, mouseY, 40, 40);
}