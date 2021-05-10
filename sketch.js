const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var snowBg1,kids,snow;
var engine,world; 

function preload(){
  snowBg1=loadImage("snow1.jpg")
  kids=loadImage("kids.jpg")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  kids= createSprite(400, 200, 50, 100);
  snow= new Snow(400,200);
  
}

function draw() {
  background(snowBg1); 
  Engine.update(engine);
   snow.display();
  drawSprites();
  
}