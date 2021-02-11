var fixedRect, movingRect;
var g;
var h;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  g=createSprite(100,400,50,50);
  g.shapeColor = "green";
  h=createSprite(1100,400,50,50);
  h.shapeColor = "blue";
  g.velocityX = 2;
  h.velocityX = -2;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 bounceOff(g,h);
if(isTouching(movingRect, fixedRect)) {
    console.log("they are touching");
}
else{
    console.log("they are not touching");
}
  drawSprites();
}