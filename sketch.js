var bow,bowImage,blueballoonImage,edges,  blueballoon,greenballoon, greenballoonImage,pinkballoon, pinkballoonImage,redballoon,redballoonImage,arrow,arrowImage, score;
var redB,blueB,greenB,pinkB,arrowGroup;
var backgroundImage;

function preload(){
  bowImage = loadImage("bow0.png");
  backgroundImage = loadImage("background0.png");
  arrowImage=loadImage("arrow0.png")
  blueballoonImage = loadImage("blue_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  pinkballoonImage = loadImage("pink_balloon0.png");
  redballoonImage = loadImage("red_balloon0.png");
}

 
  


function setup() {
  createCanvas(600,600);
  
  background=createSprite(0,0,600,600);
  background.addImage("background",backgroundImage); 
   background.scale=3.75;   
  
  bow=createSprite(470,185,10,30);
    bow.addImage("bow",bowImage);
    edges = createEdgeSprites();
  
    redB = new Group();
    greenB = new Group();
    blueB = new Group();
    pinkB = new Group();
    arrowGroup = new Group();
  
  
    score=0; 
  
  
  
   
var rand =  Math.round(random(1,10));
     
}
function draw() { 
 background.velocityX=-6;
  if( background.x<0){
    background.x=background.width/2;
  }
 
 

  console.log(bow.y);  
  
  
  bow.y=World.mouseY;
  
  if(keyDown("space")){
    var arrow=createArrow();
    arrow.addImage(arrowImage);
    arrow.y=bow.y;
  }
var select_balloon=Math.round(random(1,4));
console.log("select_balloon");
    if(World.frameCount%80== -0) {
    if(select_balloon==1){  
    blueballoon();
    }
    else if(select_balloon==2){
      greenballoon();
    }
      else if(select_balloon==3){
        pinkballoon();
      }
      else if(select_balloon==4){
        redballoon();
      }
    }
  if(arrowGroup.isTouching(redB)){
redB.destroyEach();
arrowGroup.destroyEach();
score=score+1;
}
  
if(arrowGroup.isTouching(blueB)){
blueB.destroyEach();
arrowGroup.destroyEach();
score=score+2;
}
  
if(arrowGroup.isTouching(greenB)){
greenB.destroyEach();
arrowGroup.destroyEach();
score=score+3;
}  
  
if(arrowGroup.isTouching(pinkB)){
pinkB.destroyEach();
arrowGroup.destroyEach();
score=score+4;
}
  
  
  
  drawSprites();
 
 text("score"+score,500,100);   
} 

function createArrow(){
arrow=createSprite(360,100,5,10);
arrow.velocityX= -6;
arrow.scale=0.3;
arrow.lifetime=100;
arrowGroup.add(arrow);
  return arrow;
}    
  


function blueballoon(){
   var blue=createSprite(0,Math.round(random(20,370)),10,10);
   blue.addImage(blueballoonImage);
   blue.velocityX= 4;
   blue.lifetime= 150;
   blue.scale=0.1;
   blueB.add(blue);
}

function greenballoon(){
   var green=createSprite(0,Math.round(random(20,370)),10,10);
   green.addImage(greenballoonImage);
   green.velocityX= 4;
   green.lifetime= 150;
   green.scale=0.1;
   greenB.add(green);
}

function pinkballoon(){
   var pink=createSprite(0,Math.round(random(20,370)),10,10);
   pink.addImage(pinkballoonImage);
   pink.velocityX= 4;
   pink.lifetime= 150;
   pink.scale=1.5;
   pinkB.add(pink);
}

function redballoon(){
   var red=createSprite(0,Math.round(random(20,370)),10,10);
   red.addImage(redballoonImage);
   red.velocityX= 4;
   red.lifetime= 150;
   red.scale=0.1;
   redB.add(red);
}















