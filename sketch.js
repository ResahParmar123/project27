
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var object1,object2,object3,object4,object5;
var roofobject;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

 rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;
  roofobject=new roof(400,250,230,20) 
	//Create the Bodies Here.
    object1=new Bob(320,575,40)
    object2=new Bob(360,575,40)
	object3=new Bob(400,575,40)
	object4=new Bob(450,575,40)
	object5=new Bob(480,575,40)
  
  rope1=new Rope(roofobject.body,object1.body,-80,0)
  rope2=new Rope(roofobject.body,object2.body,-40,0)
  rope3=new Rope(roofobject.body,object3.body,0,0)
  rope4=new Rope(roofobject.body,object4.body,40,0)
  rope5=new Rope(roofobject.body,object5.body,80,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  roofobject.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();
  
  
}



