var fixedRect, movingRect;

var Rect1,Rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  Rect1 = createSprite(200,100,50,50);
  Rect1.shapeColor="blue";
  

  Rect2 = createSprite(200,300,50,50);
  Rect2.shapeColor="lightblue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

bounceOff(movingRect,fixedRect);

Rect1.y=mouseY;
  Rect1.x=mouseX;

if(isTouching(Rect1,Rect2)){
  Rect1.shapeColor="yellow";
  Rect2.shapeColor="yellow";
}
else{
  Rect1.shapeColor="blue";
  Rect2.shapeColor="lightblue";
}
  
  drawSprites();
}
