
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world
var block1
var block2
var plane

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	
	var particle_options = {
		restitution:0.4,
		friction:0.02
	}

	var plane_options={
		isStatic: true
	}

	plane= Bodies.rectangle(400, 700, 800, 40, plane_options)
	World.add(world, plane)
	

	block1= Bodies.rectangle(150, 450, 150, 20, plane_options)
	World.add(world, block1)

	block2= Bodies.rectangle(650, 450, 150, 20, plane_options)
	World.add(world, block2)

	rotator1= Bodies.rectangle(400, 250, 250, 20, plane_options)
	World.add(world, rotator1)

	rotator2= Bodies.rectangle(400, 250, 250, 20, plane_options)
	World.add(world, rotator2)

	rotator3= Bodies.rectangle(400, 250, 250, 20, plane_options)
	World.add(world, rotator3)
	
	particle1 = Bodies.circle(400, 11, 20, particle_options)
	World.add(world, particle1)

	particle2 = Bodies.circle(400, 21, 20, particle_options)
	World.add(world, particle2)

	particle3 = Bodies.circle(400, 31, 20, particle_options)
	World.add(world, particle3)

	particle4 = Bodies.circle(400, 41, 20, particle_options)
	World.add(world, particle4)

	particle5 = Bodies.circle(400, 51, 20, particle_options)
	World.add(world, particle5)

	fill("PURPLE")

	angle1= 0
	angle2= 45
	angle3= 90

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("GREEN");
  rect(plane.position.x, plane.position.y, 800, 40)
  rect(block1.position.x, block1.position.y, 150, 20)
  rect(block2.position.x, block2.position.y, 150, 20)
  
  Body.rotate(rotator1, angle1)
  push()
  translate(rotator1.position.x, rotator1.position.y)
  rotate(angle1)
  rect(0, 0, 250, 20)
  pop()
  angle1+= 1

  Body.rotate(rotator2, angle2)
  push()
  translate(rotator2.position.x, rotator2.position.y)
  rotate(angle2)
  rect(0, 0, 250, 20)
  pop()
  angle2+= 1

  Body.rotate(rotator3, angle3)
  push()
  translate(rotator3.position.x, rotator3.position.y)
  rotate(angle3)
  rect(0, 0, 250, 20)
  pop()
  angle3+= 1
  
  ellipse(particle1.position.x, particle1.position.y, 20)

  ellipse(particle2.position.x, particle2.position.y, 20)

  ellipse(particle3.position.x, particle3.position.y, 20)

  ellipse(particle4.position.x, particle4.position.y, 20)

  ellipse(particle5.position.x, particle5.position.y, 20)

  Engine.update(engine);
  drawSprites();
 
}






