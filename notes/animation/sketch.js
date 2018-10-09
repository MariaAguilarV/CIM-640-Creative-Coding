var xPos = 0;
var yPos = 0;
var ballSize = 20;

var trigger = false;
var trigger2 = false;

var speed = 5;

function setup(){
  createCanvas(500,500);
  xPos  = width/2;
}

function draw (){
  background (255);
  ellipse (xPos, yPos, ballSize, ballSize);

  if (trigger == false){
    yPos+=speed;
  } else{
    yPos-=speed;

  }

  if (trigger2 == false){
    xPos+=speed;
  } else{
    xPos-=speed;
  }

  if (yPos > height){
    trigger = true;
  }

  if (yPos < 0){
    trigger = false;
  }

  if (xPos >width){
    trigger2 = true;
  }

  if (xPos < 0){
    trigger2 = false;

  }

}
