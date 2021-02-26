var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2,racer;

var obs;

var opps,opps2,opps1;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

var gameover,gimg;

//imgs

var ob1,ob2,ob3;

function preload(){
  pathImg = loadImage("Road.png");
  //animation
  mainRacerImg1 = loadAnimation("mainPlayer1.png","mainPlayer2.png");

  racer = loadAnimation("opponent1.png","opponent2.png");
  //op3
  racerop = loadAnimation("opponent4.png","opponent5.png");
  //op6
  racerop2 = loadAnimation("opponent7.png","opponent8.png");
  //op9
  //img
  ob1 = loadImage("obstacle1.png");
  ob2 = loadImage("obstacle2.png");
  ob3 = loadImage("obstacle3.png");
  //G.O.
  gimg = loadImage("gameOver.png");
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -11;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("yagamiRunning",mainRacerImg1);
mainCyclist.scale=0.05;
//grps
  obsG = new Group();
  oppoG = new Group();
  oppoG1 = new Group();
  oppoG2 = new Group();
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  if (frameCount%45 === 0){
    fill(Math.round(random(250,255)));
  }
  if (frameCount%45 === 1){
    fill(Math.round(random(250,255)));
  }
  if (frameCount%45 === 2){
    fill(Math.round(random(250,255)));
  }
  if (frameCount%45 === 3){
    fill(Math.round(random(250,255)));
  }
  if (frameCount%45 === 4){
    fill(Math.round(random(250,255)));
  }
  if (frameCount%45 === 5){
    fill(Math.round(random(250,255)));
  }
  if (frameCount%45 === 6){
    fill(Math.round(random(250,255)));
  }
  if (frameCount%45 === 7){
    fill(Math.round(random(250,255)));
  }
  if (frameCount%45 === 8){
    fill(Math.round(random(250,255)));
  }
  if (frameCount%45 === 9){
    fill(Math.round(random(250,255)));
  }
  
  text("Distance: "+ distance,350,30);
  //PLAYYYYYYY
  if(gameState===PLAY){
  distance = distance+1;
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist.collide(edges);
    if (frameCount%60 === 1){
      
   var rand = Math.round(random(1,4));
   if (rand === 1){spawnObstacles();}else
   if (rand === 2){spawnOpponents();}else   
   if (rand === 3){spawnOpponents1();}else
   if (rand === 4){spawnOpponents2();}//HHHHH;
  } 
    if (mainCyclist.isTouching(obsG)){
   obsG.destroyEach();
   oppoG.destroyEach();
   oppoG1.destroyEach();
   oppoG2.destroyEach();
   gameState = END;
 }
    if (mainCyclist.isTouching(oppoG)){
   obsG.destroyEach();
   oppoG.destroyEach();
   oppoG1.destroyEach();
   oppoG2.destroyEach();
   gameState = END;
 }
    if (mainCyclist.isTouching(oppoG1)){
   obsG.destroyEach();
   oppoG.destroyEach();
   oppoG1.destroyEach();
   oppoG2.destroyEach();
   gameState = END;
 }
    if (mainCyclist.isTouching(oppoG2)){
   obsG.destroyEach();
   oppoG.destroyEach();
   oppoG1.destroyEach();
   oppoG2.destroyEach();
   gameState = END;
 }
  //end
    if (gameState === END){
      gameover = createSprite(250,150,20,20);
      gameover.addImage(gimg);
      path.velocityX = 0;
      }
  //code to reset the background
  if(path.x < -5 ){
    path.x = 205;
  }
 
 }
}
function spawnObstacles(){
  
      obs = createSprite(random(345,495),random(10,290),10,10);    
      obs.velocityX = -5;
      obs.scale = 0.1; 
      switch(Math.round(random(1,3))){
          case 1: obs.addImage(ob1);
           break;
          case 2: obs.addImage(ob2);
           break;
          case 3: obs.addImage(ob3);
           break;
          default: break;
      }
     obsG.add(obs);
  
}
function spawnOpponents(){
 
      opps = createSprite(random(345,495),random(10,290),10,10);    
      opps.velocityX = -5;
      opps.scale = 0.05; 
      opps.addAnimation("tagami",racer);
      oppoG.add(opps);
 
}  
function spawnOpponents1(){
  
      opps1 = createSprite(random(345,495),random(10,290),10,10);    
      opps1.velocityX = -5;
      opps1.scale = 0.05; 
      opps1.addAnimation("tgami",racerop2);
      oppoG1.add(opps1);
 
}  
function spawnOpponents2(){
 
      opps2 = createSprite(random(345,495),random(10,290),10,10);    
      opps2.velocityX = -5;
      opps2.scale = 0.05; 
      opps2.addAnimation("taami",racerop);
      oppoG2.add(opps2);
 
}  