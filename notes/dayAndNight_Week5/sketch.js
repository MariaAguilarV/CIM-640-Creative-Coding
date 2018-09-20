var sun;
var moon;

var r = 255;
var g = 255;
var b = 255;

var cX = 100;
var cY = 250;
var cEdge = 20;

var rectX = 50;
var rectY = 75;
var rectSize = 100;

var sunShow = false;

var sunButton;

function preload(){
  // is useful for loading images, video, things that my website will load before my project starts.
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');

}
function setup() {
  // put setup code here
  createCanvas(400,400);
  sunButton = createButton('Press to show/hide sun');
  sunButton.position(500,100);
  sunButton.mousePressed(function(){
    if (sunShow == false){
      sunShow=true;
    } else {
      sunShow = false;
    }
  });
}

function draw() {
  // put drawing code here
  background(255);
  fill(r,g,b);
  rect(rectX, rectY, rectSize, rectSize);

  imageMode(CENTER); //to adjust where i want to start to draw
  //cX and cY is where you start to draw
  image(sun,cX, cY, sun.width/4, sun.height/4); //show image, i can also access to the widt and height of te image

  if (sunShow== true){
    image(sun,300,200);
  }

}

function mousePressed(){
  if (mouseX>rectX && mouseX<rectX+ rectSize){
    if (mouseY>rectY && mouseY<rectY+rectSize){
      r=random(256);
      g=random(0,256);
      b=random(256);
    }
  }

  var sunDist = dist(mouseX, mouseY, cX, cY);
  console.log("sun Dist: " + sunDist);
  if (sunDist < 40){
    //show/hide sun images
    if (sunShow == false){
      sunShow=true;
    } else {
      sunShow = false;
    }
  }

}

//end of code
