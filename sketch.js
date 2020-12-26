var background;
var player1,player2, player1Img, player2Img
var laser1, laser2, laser1Img, laser2Img;
var invisibleground;
var score = 0;
var count = 0;

function preload(){
  ground = loadImage("images/Background.jpg");
  laser1Img = loadImage("images/Laser 1.png");
  laser2Img = loadImage("images/Laser 2.png");

  //loadImage to Sprite objects
  player1Img = loadImage("images/Player1-.png");
  player2Img = loadImage("images/Player2-.png");
}

function setup() {
  createCanvas(1000,600);

  //Sprite objects
  invisibleground = createSprite(500,600,1000,80);
  invisibleground.visible = false;

  player1 = createSprite(110, 460, 50, 50);
  player1.addImage("player1",player1Img);

  player2 = createSprite(810,460,50,50);
  player2.addImage ("player2",player2Img);
  player2.scale = 0.7;

  laser1 = createSprite(160,420, 20, 20);
  laser1.addImage("laser1",laser1Img);
  laser1.scale = 0.1;
  laser1.visible = false;

  laser2 = createSprite(740,440, 10,10);
  laser2.addImage("laser2",laser2Img);
  laser2.scale = 0.1;
  laser2.visible = false;
}

function draw() {
  background(ground);

  fill("red");
  textSize(22);
  text("Score :",score,100,100);

  fill("yellow");
  textSize(22);
  text("Score :",count,150,600);
  //count.x = count.x +600;

 if(keyDown("right")){
 player2.x = player2.x +5;
}

 if(keyDown("left")){
   player2.x = player2.x -5;
 }

 if(keyDown("a")){
   player1.x = player1.x -5;
 }

 if(keyDown("d")){
   player1.x = player1.x +5;
 }

 if(keyDown("w")){
   laser1.visible = true;
   laser1.velocityX = 3;
 }

 if(keyDown("shift")){
   laser2.visible = true;
   laser2.velocityX = -3;
 }

 if(keyDown("s")){
   player1.y = player1.y -5;
 }

 if(keyDown("x")){
   player1.y = player1.y +5;
 }

 if(keyDown("up")){
   player2.y = player2.y -5;
 }

 if(keyDown("down")){
   player2.y = player2.y +5;
 }

 createEdgeSprites();
 player1.collide(invisibleground);
 player2.collide(invisibleground);

  drawSprites()
}
