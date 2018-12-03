// var cityImg, groundImg;
// var bubbleImg;
// var bubble;
//
// function preload (){
//     cityImg = loadImage('assets/city_bg3.png');
//     groundImg = loadImage ('assets/ground.png');
//     bubbleImg = loadImage ('assets/bubble.png');
// }
//
// function setup() {
//   createCanvas(1000, 600);
//   bubble = new Bubble ();
//
// }
//
// function draw() {
//   background("green");
//   // background(16,12,46);
//   image(cityImg, 0, 250);
//   image(groundImg, 0, 510);
//   // image (bubbleImg, 20,20, bubbleImg.width/1.2, bubbleImg.height/1.2);
//   bubble.move();
//   bubble.show();
//
// }
//
// class Bubble {
//   constructor (){
//     this.x = 20;
//     this.y = 20;
//     this.size = 1.2;
//     this.img = bubbleImg;
//   }
//   move (){
//     this.x = this.x + random(-5,5);
//     this.y = this.y + random(-5, 5);
//   }
//   show (){
//     image (this.img, this.x, this.y, this.img.width/this.size, this.img.height/this.size);
//   }
// }

// ---* version 2 starts here *---
var cityImg, groundImg, houseImg, groundWhite;
var bubbles, alphabet;
var tree;
var grounAnimation;
var present1, present2, present3, present4;
var lightAnimation, lightTreeAnimation;

var letterTPlay=false;
var letterSPlay=false;
var letterMPlay=false;
var letterGPlay=false;
var letterLPlay=false;
var fireworksOn=false;

var snow = [];
var gravity;
var zOff = 0;
var spritesheet;
var textures = [];

var soundFile;

//fireworks
var mic;
var sliderTop;
var sliderBottom;
var clapping = false;

var fireworks = [];
var gravity;

function preload (){
    cityImg = loadImage('assets/city_bg3.png');
    groundImg = loadImage ('assets/groundV1.png');
    groundWhite = loadImage ('assets/groundWhite.png');
    houseImg = loadImage ('assets/house.png');
    present1 = loadImage ('assets/presents/present1.png');
    present2 = loadImage ('assets/presents/present2.png');
    present3 = loadImage ('assets/presents/present3.png');
    present4 = loadImage ('assets/presents/present4.png');


    tree = loadAnimation ('assets/christmasTree/tree0.png', 'assets/christmasTree/tree12.png');
    tree.looping = false;

    groundAnimation = loadAnimation ('assets/ground/ground0.png', 'assets/ground/ground6.png');
    groundAnimation.looping = false;

    lightAnimation = loadAnimation ('assets/lights/light0.png', 'assets/lights/light1.png');
    lightTreeAnimation = loadAnimation ('assets/lights/christmasLight0.png', 'assets/lights/christmasLight1.png');

    spritesheet = loadImage('assets/flakes32.png'); //snow

    soundFile = loadSound('assets/christmasSongv1.mp3'); //music
}

function setup() {
  createCanvas(1000, 600);

  bubbles = new Group();
  alphabet = new Group();

// show bubbles with letters inside
  for (var i=0; i<5; i++)
  {
    var posX = random(0,width);
    var posY = random(0, height/3);
    var objWidth = random(0,50);
    var objHeight = random(0,100);
    var objSpeed = random(2,3);
    var objAngle = random(0,360);
    var objScale = random(0.5,1);

    var bubble = createSprite(posX, posY, objWidth, objHeight);

    bubble.addAnimation('floating', 'assets/bubble.png');
    bubble.setCollider('circle', -2, 2, 100);
    bubble.setSpeed(objSpeed, objAngle);
    bubble.scale = objScale;
    bubble.mass = bubble.scale;
    bubbles.add(bubble);

    var abcImg = createSprite(posX, posY, objWidth, objHeight);

    abcImg.addAnimation('floating', "assets/letter"+ i + ".png");
    abcImg.setCollider('circle', -2, 2, 100);
    abcImg.setSpeed(objSpeed, objAngle);
    abcImg.scale = objScale;
    abcImg.mass = abcImg.scale;
    alphabet.add(abcImg);
  }

  // snow
  gravity = createVector(0, 0.3);
  for (var x = 0; x < spritesheet.width; x += 32) {
    for (var y = 0; y < spritesheet.height; y += 32) {
      var img = spritesheet.get(x, y, 32, 32);
      image(img, x, y);
      textures.push(img);
    }
  }

  for (var i = 0; i < 400; i++) {
    var x = random(width);
    var y = random(height);
    var design = random(textures);
    snow.push(new Snowflake(x, y, design));
  }

  //fireworks
  mic = new p5.AudioIn();
  mic.start();
  var clapping = false;
  sliderTop = createSlider(0, 1, 0.3, 0.01);
  sliderBottom = createSlider(0, 1, 0.1, 0.01);

  gravity = createVector(0, 0.2);
}

function draw() {
  // background("green");
  background(194,225,249);
  if (letterLPlay==true) {
    background(16,12,46);
  }

  image(cityImg, 0, 250);
  image(groundImg, 0, 510);
  image(houseImg,330,250);

  bubbles.bounce(bubbles);
  alphabet.bounce(alphabet);

  if (fireworksOn==true) {
    letterSPlay = false;
      image(groundWhite, 0, 510);
  }


  if (letterSPlay== true){
     animation(groundAnimation,500,555);
  }


  for(var i=0; i<bubbles.length; i++) {
   var s = bubbles[i];

   if(s.position.x<0) {
     s.position.x = 1;
     s.velocity.x = abs(s.velocity.x);
   }

   if(s.position.x>width) {
     s.position.x = width-1;
     s.velocity.x = -abs(s.velocity.x);
   }

   if(s.position.y<0) {
     s.position.y = 1;
     s.velocity.y = abs(s.velocity.y);
   }

   if(s.position.y>height) {
     s.position.y = height-1;
     s.velocity.y = -abs(s.velocity.y);
   }

   s.mouseUpdate();
   if (s.mouseIsPressed && i==0){
     letterTPlay=true;
     s.visible = false;
   }

   if (s.mouseIsPressed && i==1){
     letterSPlay=true;
     s.visible = false;
   }

   if (s.mouseIsPressed && i==2){
     letterMPlay=true;
     s.visible = false;
   }

   if (s.mouseIsPressed && i==3){
     letterLPlay=true;
     s.visible = false;
   }

   if (s.mouseIsPressed && i==4){
     letterGPlay=true;
     s.visible = false;
   }
 }

 for(var i=0; i<alphabet.length; i++) {
  var s = alphabet[i];
  if(s.position.x<0) {
    s.position.x = 1;
    s.velocity.x = abs(s.velocity.x);
  }

  if(s.position.x>width) {
    s.position.x = width-1;
    s.velocity.x = -abs(s.velocity.x);
  }

  if(s.position.y<0) {
    s.position.y = 1;
    s.velocity.y = abs(s.velocity.y);
  }

  if(s.position.y>height) {
    s.position.y = height-1;
    s.velocity.y = -abs(s.velocity.y);
  }

  s.mouseUpdate();
  if (s.mouseIsPressed && i==0){
    letterTPlay=true;
    s.visible = false;
  }

  if (s.mouseIsPressed && i==1){
    letterSPlay=true;
    s.visible = false;
  }

  if (s.mouseIsPressed && i==2){
    letterMPlay=true;
    s.visible = false;
  }

  if (s.mouseIsPressed && i==3){
    letterLPlay=true;
    s.visible = false;
  }

  if (s.mouseIsPressed && i==4){
    letterGPlay=true;
    s.visible = false;
  }
}

  drawSprites();

// letter T
 if (letterTPlay==true) animation (tree,850,400);

// letter S
 if (letterSPlay==true) fallSnow();

 //letter M
 if (letterMPlay==true) playMusic();

 //letter G
 if (letterGPlay==true) showPresents();

 //letter L
 if (letterLPlay==true) {
   animation(lightAnimation,530,346);
   animation(lightTreeAnimation, 860,443);
}
 //fireworks
 var vol = mic.getLevel();
 var thresholdTop = sliderTop.value();
 var thresholdBottom = sliderBottom.value();
 if (vol > thresholdTop && !clapping  && letterTPlay==true && letterGPlay==true && letterMPlay==true) {
   fireworksOn= true;
   clapping = true;
 }

 if (vol < thresholdBottom) {
   clapping = false;
 }

 fill(0, 255, 0);
 //console.log(vol);
 noStroke();
 var y = map(vol, 0, 1, height, 0);
 rect(width - 50, y, 50, height - y);

 var ty = map(thresholdTop, 0, 1, height, 0);
 stroke(255, 0, 0);
 strokeWeight(4);
 line(width - 50, ty, width, ty);

 var by = map(thresholdBottom, 0, 1, height, 0);
 stroke(0, 0, 255);
 strokeWeight(4);
 line(width - 50, by, width, by);

 if (fireworksOn==true) playfireworks();

}

function fallSnow(){
  zOff += 0.1;

 for (flake of snow) {
   var xOff = flake.pos.x / width;
   var yOff = flake.pos.y / height;
   var wAngle = noise(xOff, yOff, zOff) * TWO_PI;
   var wind = p5.Vector.fromAngle(wAngle);
   wind.mult(0.1);

   flake.applyForce(gravity);
   flake.applyForce(wind);
   flake.update();
   flake.render();
 }

 // animation(groundAnimation,500,555);
}

function playMusic() {
  // while (soundFile.isPlaying()==false){
  //     soundFile.play();
  // }
 if (soundFile.isPlaying()==false) soundFile.play();
}

function showPresents() {
   image(present1, 920, 430);
   image(present2, 720, 500);
   image(present3, 800, 500);
   image(present4, 850, 500);
}


function playfireworks(){
  // background(16,12,46);
  stroke(255);
  strokeWeight(10);
  console.log ("maki");
  colorMode(RGB);
  if (random(1) < 0.03) {
    console.log ("maki1");
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
  fireworks[i].update();
  fireworks[i].show();

  if (fireworks[i].done()) {
    fireworks.splice(i, 1);
  }
}
}
