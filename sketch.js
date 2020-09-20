var car, wall;
var speed, weight;
var bullet, thickness;
var math;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    math = 0.5*weight*speed*speed/thickness*thickness*thickness;
    console.log(math);
    if(math < 10){
      bullet.shapeColor = color(0,255,0);
    }
    if(math > 10){
      bullet.shapeColor = color(255,0,0);
    }
  }
 
  drawSprites();
}