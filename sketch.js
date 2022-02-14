var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost= createSprite(300,300,10,10)
ghost.addImage("ghost",ghostImg)
ghost.scale= .5
doorsGroup= new Group()
climberGroup= new Group()
invisibleBlockGroup= new Group()
}

function draw() {
  background(200);
  if(tower.y > 400){
      tower.y = 300
    }

  if(keyDown("left_arrow")){
ghost.x= ghost.x -3
  }

  if(keyDown("right_arrow")){
    ghost.x= ghost.x +3
  }

  if(keyDown("space")){
    ghost.velocityY= -10

  }

ghost.velocityY= ghost.velocityY+0.2
spawndoor()
drawSprites ()
}
function spawndoor(){
if (frameCount%200  ===0){
  door = createSprite(300,300);
  door.addImage("door",doorImg);
  door.velocityY = 6;

  climber = createSprite(300,300);
  climber.addImage("climber",climberImg);
  climber.velocityY = 67;

  invisibleBlock = createSprite(300,300); 
  invisibleBlock.velocityY = 67;
} 


}