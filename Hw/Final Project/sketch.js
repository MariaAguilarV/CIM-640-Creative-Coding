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

// var cityImg, groundImg;
//
// var bubble;
// var direction = 100;
// var bubbles;
//
// function preload (){
//     cityImg = loadImage('assets/city_bg3.png');
//     groundImg = loadImage ('assets/ground.png');
//
// }
//
// function setup() {
//   createCanvas(1000, 600);
//   bubble = createSprite(400, 200, 50, 100);
//   bubble.addAnimation('floating', 'assets/bubble.png');
// }
//
// function draw() {
//   background("green");
//   // background(16,12,46);
//   image(cityImg, 0, 250);
//   image(groundImg, 0, 510);
//
//   direction += 2;
//   bubble.setSpeed(2, direction);
//
//   // bubble.rotateToDirection = true;
//
//   drawSprites();
// }


var cityImg, groundImg;

var direction = 100;
var bubbles, alphabet;

function preload (){
    cityImg = loadImage('assets/city_bg3.png');
    groundImg = loadImage ('assets/ground.png');

}

function setup() {
  createCanvas(1000, 600);

  bubbles = new Group();
  alphabet = new Group();

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
    // var bubble = createSprite(random(0,width), random(0,height/3), random(0,50), random(0,100));
    //
    // bubble.addAnimation('floating', 'assets/bubble.png');
    // bubble.setCollider('circle', -2, 2, 100);
    // bubble.setSpeed(random(2, 3), random(0, 360));
    // bubble.scale = random(0.5, 1);
    // bubble.mass = bubble.scale;
    //
    // bubbles.add(bubble);
  }

}

function draw() {
  // background("green");
  background(194,225,249);
  // background(16,12,46);
  image(cityImg, 0, 250);
  image(groundImg, 0, 510);

  bubbles.bounce(bubbles);
  alphabet.bounce(alphabet);

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
}

  drawSprites();
}
