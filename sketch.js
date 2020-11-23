
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
   createCanvas(600, 600);
  



  
monkey = createSprite(50,550,20,20);
monkey.addAnimation("monkey",monkey_running);
monkey.scale = 0.1
  
ground = createSprite(300,580,600,10);
ground.x = ground.width/2;
ground.velocityX=-2;

 FoodGroup = createGroup();
 obstacleGroup = createGroup();
  
}


function draw() {
  
   background(180);
   survivalTime = survivalTime+Math.round(getFrameRate()/60);
   stroke("black");
   textSize(20)
   text("survival Time: "+ survivalTime, 400,50); 
   
   
  
  console.log(monkey.y); 
  
monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& monkey.y >= 540) {
        monkey.velocityY = -12;
        
    }
  monkey.velocityY=monkey.velocityY + 0.8;
  
  spawnBananas();
  spawnObstacles();
  
  
  
  
  
  drawSprites();

}
  
 function spawnObstacles(){
 
  if (World.frameCount % 300 === 0) {
    obstacle = createSprite(600,165,10,40);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.y = Math.round(random(550,555));
    obstacle.velocityX = -3;
    obstacle.lifetime = 300;
    obstacle.scale = 0.1
    
    
      
    obstacleGroup.add(obstacle)
   
  }

 }
function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600,580,20,20);
    banana.y = Math.round(random(460,470));
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}