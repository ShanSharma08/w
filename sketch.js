
var monkey
var mr
var banana
var bi
var ob
var oi
var fg
var og
var scor
var groun
var bag
var obg
var survtime

var gameState = PLAY;
var PLAY = 1
var END = 0

function preload(){
  
  
  mr =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bi = loadImage("banana.png");
  oi = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  scor = 0;
  survtime = 0
  
  groun = createSprite(300,580,600,50)
  groun.shapeColor = "black"
  
  monkey = createSprite(90,500,10,10);
  monkey.addAnimation("mr",mr);
  monkey.scale = 0.2;
  
  gameState = PLAY;
  
  bag = new Group();
  obg = new Group();
}


function draw() {
  background("white")
  text("X: "+mouseX+" Y: "+mouseY,mouseX,mouseY);
  text("Bananas: "+ scor, 500,50);
  text("Time Alive:"+survtime, 495,75)
  
if(gameState === PLAY){
  survtime = survtime + Math.round(getFrameRate()/60);
  ene();
  ba();
if(obg.isTouching(monkey)){
  gameState = END
  obg.destroyEach();
  bag.destroyEach();
 }
if(bag.isTouching(monkey)){
  scor = scor+1
  bag.destroyEach();
 }
  if(keyWentDown("space") && monkey.y>400) {
  monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
}
else if(gameState === END){
  fill("black")
  text("GAME OVER, PRESS R TO RESTART",200,300);
  
  bag.setVelocityEach(0);
  obg.setVelocityEach(0);
  monkey.velocityY = 0;
  
  bag.setLifetimeEach(-1);
  obg.setLifetimeEach(-1);
  
  
  
if(keyWentDown("R") && gameState === END){
  gameState = PLAY;
  survtime = 0;
  scor = 0;
}
  
  bag.setVelocityXEach = 0;
  obg.setVelocityXEach = 0;
  
  bag.setLifetimeEach(-1);
  obg.setLifetimeEach(-1);
  
  
}
  monkey.collide(groun);
  drawSprites();
}

function ba(){
if(frameCount % 90 === 0){
  banana = createSprite(620,Math.round(random(200,510)),10,10);
  banana.velocityX = -9;
  banana.addImage("bi",bi)
  banana.scale = 0.15;
  banana.lifetime = 90
  banana.debug = true
  banana.setCollider("circle",0,0,300)
  bag.add(banana);
 }
}

function ene(){
if(frameCount % 300 === 0){
  ob = createSprite(620,530,10,10);
  ob.addImage("oi",oi);
  ob.lifetime = 90
  ob.scale = 0.25
  ob.velocityX = -7;
  ob.setCollider("circle",0,0,175)
  obg.add(ob);
  ob.debug = true
 }
}


