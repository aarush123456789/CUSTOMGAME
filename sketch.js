var leoz,ground
var PLAY=1;
var END=0;
var gameState =PLAY;

function setup() {
  createCanvas(windowWidth,windowHeight);
leoz = createSprite (windowWidth-1200,windowHeight-60,80,80)
  ground = createSprite(windowWidth/2,windowHeight-10,windowWidth,20);
  ground.x = ground.width/2
}

function draw() {

  background(1)  
  drawSprites();

  if (gameState === PLAY)
  {
    ground.velocityX= -4

    if(ground.x < 0){
      ground.x = ground.width/2

    }

if(keyDown("space")){
 leoz.velocityY = -13
}

leoz.velocityY = leoz.velocityY + 0.8

leoz.collide(ground);
  }

  
}