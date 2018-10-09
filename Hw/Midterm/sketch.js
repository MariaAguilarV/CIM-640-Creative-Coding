var headPosX = 200;
var headPosY = 120;

var bodyPosX = headPosX;
var bodyPosY = headPosY + 110;
var bodyWidth = 175;
var bodyHeight = 140;

var bodyColor = "#ECECEC";
var chipsColor = "#6B4D20";
var chocolateColor = "#E4C18C";
var strawberryColor = "#F9A291";

//backgournd colors

var r = 31;
var g = 22;
var b = 91;

var moodHappy = false;
var cookieShow1 = true;
var cookieShow2 = true;
var cookieShow3 = true;
var cookieShow4 = true;

var cookie1X = 400;
var cookie1Y = 50;

var cookie2X = 450;
var cookie2Y = 200;

var cookie3X = 500;
var cookie3Y = 100;

var cookie4X = 380;
var cookie4Y = 280;

function setup() {
  // put setup code here
  frameRate (10);
  createCanvas(600,400);
  background(r,g,b);
}

function draw() {

  background(r,g,b);
  //Instructions
  fill ("white");

  textSize(14);
  textFont ('Georgia');
  text("Press the cookies",420,310);

  textSize(14);
  textFont ('Georgia');
  text("to feed him!",435,330);

  textSize(11);
  textFont ('Helvetica');
  text("TIP 1: He loves chocolate cookies.",380,360);
  text("TIP 2: He doesn't like strawberry cookies.",380,380);


  //head
  fill (bodyColor);
  ellipse (headPosX,headPosY,150,120);

  //body
  ellipse(bodyPosX,bodyPosY,bodyWidth,bodyHeight);

  //ears
  //noFill();
  beginShape();
  vertex(headPosX - 20, headPosY - 60);
  bezierVertex(headPosX - 50, headPosY - 75, headPosX - 50, headPosY - 60, headPosX - 50, headPosY - 40);
  endShape();

  beginShape();
  vertex(headPosX + 20, headPosY - 60);
  bezierVertex(headPosX + 50, headPosY - 75, headPosX + 50, headPosY - 60, headPosX + 50, headPosY - 40);
  endShape();

  //eyes
  fill ("black");
  ellipse (headPosX - 18,headPosY-15,25,30);
  ellipse (headPosX + 18,headPosY-15,25,30);

  fill ("white");
  ellipse (headPosX - 18,headPosY-22,23,15);
  ellipse (headPosX - 18,headPosY-5,20,10);

  ellipse (headPosX + 18,headPosY-22,23,15);
  ellipse (headPosX + 18,headPosY-5,20,10);

    //eyeslashes
    noFill();
    arc(headPosX - 23,headPosY-37, 15, 15, HALF_PI, PI);
    arc(headPosX - 25,headPosY-35, 15, 15, HALF_PI, PI);
    arc(headPosX - 27,headPosY-33, 15, 15, HALF_PI, PI);

    arc(headPosX + 23,headPosY-37, 15, 15, 0, HALF_PI);
    arc(headPosX + 25,headPosY-35, 15, 15, 0, HALF_PI);
    arc(headPosX + 27,headPosY-33, 15, 15, 0, HALF_PI);

    /*arc(headPosX + 17,headPosY-37, 15, 15, HALF_PI, PI);
    arc(headPosX + 22,headPosY-37, 15, 15, HALF_PI, PI);
    arc(headPosX + 27,headPosY-36, 15, 15, HALF_PI, PI);

    arc(headPosX - 17,headPosY-37, 15, 15, 0, HALF_PI);
    arc(headPosX - 22,headPosY-37, 15, 15, 0, HALF_PI);
    arc(headPosX - 27,headPosY-36, 15, 15, 0, HALF_PI);*/

  //hair
  fill("white");
  beginShape();
  vertex(headPosX - 20, headPosY - 58);
  bezierVertex(headPosX-5,headPosY - 65,headPosX-10,headPosY -45,headPosX-10,headPosY - 88);
  endShape();

  beginShape();
  vertex(headPosX - 10, headPosY - 58);
  bezierVertex(headPosX,headPosY - 65,headPosX,headPosY -50,headPosX-2,headPosY - 75);
  endShape();

  beginShape();
  vertex(headPosX, headPosY - 60);
  bezierVertex(headPosX+20,headPosY - 65,headPosX+10,headPosY -50,headPosX+7,headPosY - 85);
  endShape();

  beginShape();
  vertex(headPosX+9, headPosY - 60);
  bezierVertex(headPosX+40,headPosY - 60,headPosX+20,headPosY -45,headPosX+30,headPosY - 82);
  endShape();

  //arms
  fill (bodyColor);
  beginShape();
  vertex(bodyPosX-(bodyWidth/5), bodyPosY-(bodyHeight/2)+5);
  bezierVertex(bodyPosX-150, bodyPosY-90,bodyPosX-165, bodyPosY-10, bodyPosX-(bodyWidth/3), bodyPosY-(bodyHeight/3));
  endShape();


  beginShape();
  vertex(bodyPosX+(bodyWidth/5), bodyPosY-(bodyHeight/2)+5);
  bezierVertex(bodyPosX+150, bodyPosY-90,bodyPosX+165, bodyPosY-10, bodyPosX+(bodyWidth/3), bodyPosY-(bodyHeight/3));
  endShape();

  //legs
  //right leg
  fill (bodyColor);
  beginShape();
  vertex(bodyPosX+(bodyWidth/9), bodyPosY+ (bodyHeight/2)-5);
  bezierVertex(bodyPosX+33, bodyPosY+133,bodyPosX+80, bodyPosY+135, bodyPosX+(bodyWidth/3.5), bodyPosY+(bodyHeight/2)-15);
  endShape();

  //left leg

  beginShape();
  vertex(bodyPosX-(bodyWidth/3.5), bodyPosY+ (bodyHeight/2)-15);
  bezierVertex(bodyPosX-(bodyWidth/3.5)+10, bodyPosY+(bodyHeight/2)-50,bodyPosX-(bodyWidth/3.5)+50, bodyPosY+60, bodyPosX, bodyPosY+100);
  bezierVertex(bodyPosX-(bodyWidth/3.5)+40, bodyPosY+(bodyHeight/2)+65,bodyPosX-(bodyWidth/3.5)+5, bodyPosY+90, bodyPosX-(bodyWidth/3.5)+10, bodyPosY+65)
  endShape();

  //tale
  beginShape();
  vertex(bodyPosX-(bodyWidth/3)-15, bodyPosY+ (bodyHeight/4));
  bezierVertex(bodyPosX-150, bodyPosY+20,bodyPosX-80, bodyPosY+60, bodyPosX-(bodyWidth/2)+5, bodyPosY+(bodyHeight/4)-15);
  endShape();

// Interactive elements

  //mouth
  fill("black");

  if (moodHappy == true){
    //smile
    beginShape();
    vertex(headPosX, headPosY+20);
    bezierVertex(headPosX -70, headPosY-20, headPosX -70, headPosY + 50, headPosX, headPosY + 55);
    endShape();

    beginShape();
    vertex(headPosX, headPosY+20);
    bezierVertex(headPosX +70, headPosY-20, headPosX +70, headPosY + 50, headPosX, headPosY + 55);
    endShape();

    beginShape();
    vertex(headPosX+20, headPosY+10);
    bezierVertex(headPosX+20, headPosY+17, headPosX-20, headPosY+17, headPosX-20, headPosY+10);
    bezierVertex(headPosX-10, headPosY+40, headPosX+10,headPosY+40 ,headPosX+20, headPosY+10);
    endShape();

    //tooth
    fill("white");
    quad(headPosX+20, headPosY+10, headPosX+23, headPosY+18,headPosX+15,headPosY+21,headPosX+12,headPosY+13);
    quad(headPosX-20, headPosY+10, headPosX-23, headPosY+18,headPosX-15,headPosY+21,headPosX-12,headPosY+13);

    //endSmile

  } else{
    //sad
    beginShape();
    vertex(headPosX, headPosY+7);
    bezierVertex(headPosX -70, headPosY+12, headPosX -70, headPosY + 62, headPosX, headPosY + 40);
    endShape();

    beginShape();
    vertex(headPosX, headPosY+7);
    bezierVertex(headPosX +70, headPosY+12, headPosX +70, headPosY + 62, headPosX, headPosY + 40);
    endShape();

    //tooth
      fill("white");
      quad(headPosX+17, headPosY+10, headPosX+26, headPosY+12,headPosX+23,headPosY+20,headPosX+15,headPosY+18);
      quad(headPosX-17, headPosY+10, headPosX-26, headPosY+12,headPosX-23,headPosY+20,headPosX-15,headPosY+18);

    //endSad
  }

// COOKIES SECTION
 if (cookieShow1 == true){
   fill(chocolateColor);
   ellipse(cookie1X,cookie1Y,50,50);
        // chocolate chips
     fill(chipsColor);
     ellipse(cookie1X-10,cookie1Y,8,8);
     ellipse(cookie1X+10, cookie1Y+3,8,8);
     ellipse(cookie1X, cookie1Y-10,8,8);
     ellipse(cookie1X, cookie1Y+10,8,8);
 }

 if (cookieShow2 == true){
   fill(chocolateColor);
   ellipse(cookie2X,cookie2Y,50,50);
        // chocolate chips
     fill(chipsColor);
     ellipse(cookie2X-10,cookie2Y,8,8);
     ellipse(cookie2X+10, cookie2Y+3,8,8);
     ellipse(cookie2X, cookie2Y-10,8,8);
     ellipse(cookie2X, cookie2Y+10,8,8);
 }

 if (cookieShow3 == true){
   fill(strawberryColor);
    ellipse(cookie3X,cookie3Y,50,50);
        // chocolate chips
     fill(chipsColor);
     ellipse(cookie3X-10,cookie3Y,8,8);
     ellipse(cookie3X+10, cookie3Y+3,8,8);
     ellipse(cookie3X, cookie3Y-10,8,8);
     ellipse(cookie3X, cookie3Y+10,8,8);
 }

 if (cookieShow4 == true){
   fill(strawberryColor);
    ellipse(cookie4X,cookie4Y,50,50);
        // chocolate chips
     fill(chipsColor);
     ellipse(cookie4X-10,cookie4Y,8,8);
     ellipse(cookie4X+10, cookie4Y+3,8,8);
     ellipse(cookie4X, cookie4Y-10,8,8);
     ellipse(cookie4X, cookie4Y+10,8,8);
 }

// Interaction 2
  if (moodHappy==true && cookieShow1==false && cookieShow2==false){
    r=random(256);
    g=random(256);
    b=random(256);
  } else {
    r = 31;
    g = 22;
    b = 91;
  }
}


function mousePressed(){

  var cookieDist1 = dist(mouseX, mouseY, cookie1X, cookie1Y);
  var cookieDist2 = dist(mouseX, mouseY, cookie2X, cookie2Y);
  var cookieDist3 = dist(mouseX, mouseY, cookie3X, cookie3Y);
  var cookieDist4 = dist(mouseX, mouseY, cookie4X, cookie4Y);

  console.log("cookie Dist: " + cookieDist1);
  if (cookieDist1 < 25){
    if (cookieShow1 == true){
      cookieShow1 = false;
      if (moodHappy == false){
        moodHappy=true;
      }
    }
  }

  if (cookieDist2 < 25){
    if (cookieShow2 == true){
        cookieShow2 = false;
        if (moodHappy == false){
          moodHappy=true;
        }
      }
  }

  if (cookieDist3 < 25){
    if (cookieShow3 == true){
        cookieShow3 = false;
        if (moodHappy == true){
          moodHappy=false;
        }
      }
  }

  if (cookieDist4 < 25){
    if (cookieShow4 == true){
        cookieShow4 = false;
        if (moodHappy == true){
          moodHappy=false;
        }
      }
  }

}
