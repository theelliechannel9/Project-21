const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

let engine;
let world;

function preload() {
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	ellipseMode(RADIUS);

	var ballOptions = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	};

	ball = Bodies.circle(200, 100, 20, ballOptions);
	World.add(world, ball);

	// Create the ground using the Ground class
	 ground = new Ground(width/2, 670, width, 20);
	 leftSide = new Ground(1100, 600, 20, 120);
	 rightSide = new Ground(1350, 600, 20, 120);
}

function draw() {
	background(51);
	Engine.update(engine);
	ellipse(ball.position.x, ball.position.y, 10);

	// Display the ground
	// Replace the line below with the appropriate drawing function for the ground
	ground.display();

	leftSide.display();

	rightSide.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball, ball.position, { x: 85, y: -85 });
}
}
