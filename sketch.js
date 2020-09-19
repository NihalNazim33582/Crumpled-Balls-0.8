
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustBin1,dustBin2,dustBin3;
var ground;
var paper;

function setup() {
	
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,699,800,10);
	
	dustBin1 = new DustBin(width/2,680,100,20);
	dustBin2 = new DustBin(350,665,20,50);	
	dustBin3 = new DustBin(460,665,20,50);

	var options ={
		isStatic:false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2		
    }

    paper = Bodies.circle(200,100,20,options); 
    World.add(world,paper);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);
	
	Engine.update(engine);
	
	ground.display(); 
	dustBin1.display();
	dustBin2.display();
	dustBin3.display();
	ellipse(paper.position.x,paper.position.y,20,20);
	
	keyPressed();
	drawSprites(); 
}

function keyPressed (){
	if(keyCode === UP_ARROW){
		console.log("I AM ANNOEYED");
		Matter.Body.applyForce(paper.body,paper.position.x&&paper.position.y,{x:105,y:-105});
	}
}