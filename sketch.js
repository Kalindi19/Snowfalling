var snowBg1,kids,snow;

function preload(){
  snowBg1=loadImage("snow1.jpg")
  kids=loadImage("kids.jpg")
}

function setup() {
  createCanvas(800,400);
  kids= createSprite(400, 200, 50, 100);
  snow= new Snow(400,200)
}

function draw() {
  background(snowBg1); 
   snow.display();
  drawSprites();
  
}