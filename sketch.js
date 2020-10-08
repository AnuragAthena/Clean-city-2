var ground;
var paperBall;
// var paperBody;
var dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// const Render = Matter.Render;
var engine, world;
var bottom, side1, side2;
// var image1, image2;

function preload()
{
	// image1 = loadImage("paper.png");
	// image2 = loadImage("dustbingreen.png");	  
}

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	// ground.shapeColor=color("white");
	// World.add(world, ground);
	
	

	// paperBody = Bodies.rectangle(50, 585 , 20 , 20, {restitution:0, isStatic:false, density:1.0});
	// World.add(world, paperBody);

	// var render = Render.create({
	// 	element: document.body,
	// 	engine: engine,
	// 	options: {
	// 	  width: 1200,
	// 	  height: 700,
	// 	  wireframes: false
	// 	}
	//   });

	ground = new Ground(750, 700, 1500, 10);
	dustbin = new Dustbin(1300, 540)
	paperBall = new Paper(100, 250, 60);
	bottom = new Ground(1300, 590, 150, 10);
	side1 = new Ground(1230, 530, 10, 300);
	side2 = new Ground(1380, 530, 10, 300);
    
	Engine.run(engine);
	// Render.run(render);
}


function draw() {
  
  background("white");
  rectMode(CENTER);
  Engine.update(engine);
  ground.display();
   
  bottom.display(); 
  side1.display();
  side2.display();
  paperBall.display();
  dustbin.display();
  
  //   paperBall.x= paperBody.position.x 
//   paperBall.y= paperBody.position.y 
  keyPressed();
  
  
//   drawSprites();
 }

 function keyPressed()
 {
	if(keyCode === UP_ARROW)
	{
		console.log("pressed");
		// Matter.Body.setStatic(paperBall.body, false);
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:5, y:-10});
		// console.log(paperBall.body.position);

	} 
 }



