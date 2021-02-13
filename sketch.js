var player,planeImg;
var gameOver,gameOverImg;

var cloud,cloudGroup,cloudImg;
var coin,coinGroup,coinImg;

var opp1,oppG1,opp1Img;
var opp2,oppG2,opp2Img;
var opp3,oppG3,opp3Img;
var opp;

var score = 0;

function preload(){
planeImg = loadImage("images/plane.png");
gameOverImg = loadImage("images/gameOver.png");
cloudImg = loadImage("images/cloud.png");
coinImg = loadImage("images/coin.png");

opp1Img = loadImage("images/opp1.png");
opp2Img = loadImage("images/opp2.png");
opp3Img = loadImage("images/opp3.png");

}

function setup() {
  createCanvas(1200,400);
  player = createSprite(60,200,50,50);
  player.addImage(planeImg);
  player.scale = 1.1;

  gameOver = createSprite(600,200,50,50);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 1;
  gameOver.visible = false;
  
  oppG1 = new Group();
  oppG2 = new Group();
  oppG3 = new Group();

  cloudGroup = new Group();
  coinGroup = new Group();
}

function draw() {
  background(100,255,255); 

  player.y = World.mouseY;

  edges = createEdgeSprites();
  player.collide(edges)

  opp = Math.round(random(1,3));
  if(World.frameCount % 150 === 0){
    if(opp === 1){
      greenPlane();
    }
    else if(opp === 2){
      yellowPlane();
    }
    else{
      bluePlane();
    }
  }
  
  

  //spawnCoin();
  spawnCloud();

  drawSprites();

  textSize(20);
  stroke(0);
  strokeWeight(3);
  fill(255);
  text("SCORE : "+ score,1090,30);

}

function greenPlane(){
  opp1 = createSprite(1100,Math.round(random(40,350)));
  opp1.addImage(opp1Img);
  opp1.scale = 1.1;
  opp1.velocityX = -4;
  opp1.lifetime = 200;
  oppG1.add(opp1);
}

function yellowPlane(){
  opp2 = createSprite(1100,Math.round(random(40,350)));
  opp2.addImage(opp2Img);
  opp2.scale = 1.1;
  opp2.velocityX = -4;
  opp2.lifetime = 200;
  oppG2.add(opp1);
}

function bluePlane(){
  opp3 = createSprite(1100,Math.round(random(40,350)));
  opp3.addImage(opp3Img);
  opp3.scale = 1.1;
  opp3.velocityX = -4;
  opp3.lifetime = 200;
  oppG3.add(opp1);
}

function spawnCoin(){
if(frameCount % 150 === 0){
  coin = createSprite(1100,Math.round(random(40,350)));
  coin.addImage(coinImg);
  coin.scale = 0.6;
  coin.velocityX = -4;
  coin.lifetime = 200;
 // coinGroup.add(coin);
 }
}

function spawnCloud(){
if(frameCount % 50 === 0){
  cloud = createSprite(1100,Math.round(random(40,350)));
  cloud.addImage(cloudImg);
  cloud.scale = 0.5;
  cloud.velocityX = -4;
  cloud.lifetime = 200;
  cloudGroup.add(cloud);
 }
}