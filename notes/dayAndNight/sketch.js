var sun;
var moon;

var r = 255;
var g = 255;
var b = 255;

var cX = 50;
var cY = 50;
var cEdge = 20;

var rectX = 50;
var rectY = 75;
var rectSize = 100;

function preload(){
  // is useful for loading images, video, things that my website will load before my project starts.
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');

}
function setup() {
  // put setup code here
  frameRate(10);
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(r,g,b);
  console.log("mouseX: "+ mouseX);

  //Interface
  textSize(18);
  text("Move over each area to reveal a surprise!",20,20); //you can change the text size and font
  line(width/2,0,width/2,height);
  text("Day",120,360);
  text("Night",300,360);

  //Interaction


  /*
  if(true){
    Execute this code
  }
  */

  //once I know that my if statement work ok, then I do the action, this is why we always should add a console log

  if (mouseX > 0 && mouseX <= width/2){
    console.log("Day Side");
    image(sun,100,100);
  }

  if (mouseX > width/2 && mouseX < width){
    console.log("Night Side");
    image(moon,100,100);
  }
  ellipse (cX, cY, cEdge);
  var cDist = dist(cX, cY, mouseX, mouseY);
  console.log("cDist: " + cDist);

  if (cDist <  10){
    r = 255;
    g = 0;
    b = 0;
  } else {
    r=255;
    g=255;
    b=255;
  }


if (mouseX>rectX && mouseX<rectX+ rectSize){
  if (mouseY>rectY && mouseY<rectY+rectSize){
    console.log("In here")
    r=random(256);
    g=random(0,256);
    b=random(256);
  }
}

fill(r,g,b);
rect(rectX,rectY,rectSize, rectSize);
  //end of code
}
