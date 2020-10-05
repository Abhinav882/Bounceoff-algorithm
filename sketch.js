var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameobject1= createSprite(600, 100, 50, 80);
  gameobject1.shapeColor = "green";
  gameobject2= createSprite(600, 400, 60, 100);
  gameobject2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  gameobject1.x  = World.mouseX;
  gameobject1.y  = World.mouseY;
Bounceoff(fixedRect,movingRect);
 if (isTouching(gameobject1,gameobject2)){
   gameobject1.shapeColor = "red";
   gameobject2.shapeColor = "red";
 }
 else{
  gameobject1.shapeColor = "green";
  gameobject2.shapeColor = "green";
 }
  drawSprites();
}
