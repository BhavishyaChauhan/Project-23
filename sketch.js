var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxline1;
var boxline1body;
var boxline2body;
var boxline2;
var boxline3;
var boxline3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxline1=createSprite(width/2,height-55,200,20)
	boxline1.shapeColor="red"

	boxline2=createSprite(500,height-95,20,100)
	boxline2.shapeColor="red"

	boxline3=createSprite(290,height-95,20,100)
	boxline3.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);

	boxline1body=Bodies.rectangle(width/2,height-75,200,20,{isStatic : true, density:2})
	World.add(world, boxline1body)

	boxline2body=Bodies.rectangle(500,height-95,20,100,{isSatatic: true})
	World.add(world, boxline2body)

	boxline3body=Bodies.rectangle(290,height-95,20,100)
	World.add(world,boxline3body)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxline1
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody,false)
  }
}



