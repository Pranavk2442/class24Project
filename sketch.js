
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(300,100,PI);
ground=new Ground(400,700,800,40);
stone = new Stone(400,400,50,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	Engine.update(engine);
  
hammer.display();
ground.display();
stone.display();

  drawSprites();
 
}



