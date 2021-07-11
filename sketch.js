const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var con;
var con2;
var con3;
var con4;
var con5;
var rope1;
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

var bob_options={
	restitution:0.8
} 
bob1=Bodies.circle(50,100,50,bob_options);
World.add(world,bob1);
bob2=Bodies.circle(300,230,50,bob_options);
World.add(world,bob2);
bob3=Bodies.circle(400,230,50,bob_options);
World.add(world,bob3);
bob4=Bodies.circle(400,230,50,bob_options);
World.add(world,bob4);
bob5=Bodies.circle(400,230,50,bob_options);
World.add(world,bob5);
rope1=new rope(bob1,roof,-80,0)
//World.add(world,rope1)
var roof_options={
	isStatic:true			
}
roof = Bodies.rectangle(400,100,500,50,roof_options);
    World.add(world,roof);

 con =Matter.Constraint.create({
   	bodyA:roof,
	pointA:{x:0,y:0},
			  bodyB:bob1,
		  pointB:{x:0,y:0},
			  length:200,
		  stiffness:0.1
	  })
	  World.add(world,con);
	  con2 =Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
			  bodyB:bob2,
			  pointB:{x:0,y:0},
			  length:200,
			  stiffness:0.1
	  })
World.add(world,con2);
con3 =Matter.Constraint.create({
	bodyA:roof,
	pointA:{x:0,y:0},
		  bodyB:bob3,
		  pointB:{x:0,y:0},
		  length:200,
		  stiffness:0.1
  })
World.add(world,con3)

con4 =Matter.Constraint.create({	
	bodyA:roof,
	pointA:{x:0,y:0},
		  bodyB:bob4,
		  pointB:{x:0,y:0},
		  length:200,
		  stiffness:0.1
  })
World.add(world,con4)

con5 =Matter.Constraint.create({
	bodyA:roof,
	pointA:{x:0,y:0},
		  bodyB:bob5,
		  pointB:{x:0,y:0},
		  length:200,
		  stiffness:0.1
  })
World.add(world,con5)


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);
  rect(roof.position.x,roof.position.y,280,20);

  //call display() to show ropes here
//rope1.display();
//display();
  //push();
  //strokeWeight(2);
  //stroke(255);
  
  
  line(roof.position.x,roof.position.y,bob1.position.x,bob1.position.y);
  line(roof.position.x,roof.position.y,bob2.position.x,bob2.position.y);
  line(roof.position.x,roof.position.y,bob3.position.x,bob3.position.y);
  line(roof.position.x,roof.position.y,bob4.position.x,bob4.position.y);
  line(roof.position.x,roof.position.y,bob5.position.x,bob5.position.y);
  pop();
  
  //create ellipse shape for multiple bobs here
ellipse(bob1.position.x,bob1.position.y,50);
 ellipse(bob2.position.x,bob2.position.y,50);
 ellipse(bob3.position.x,bob3.position.y,50);
 ellipse(bob4.position.x,bob4.position.y,50);
 ellipse(bob5.position.x,bob5.position.y,50);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
