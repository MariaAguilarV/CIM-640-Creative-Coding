var headPosX = 200;
var headPosY = 120;

var bodyPosX = headPosX;
var bodyPosY = headPosY + 110;
var bodyWidth = 175;
var bodyHeight = 140;

var bodyColor = "#ECECEC";
var backgroundColor = "#1F165B";

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(backgroundColor);
}

function draw() {

// this section is to move the draw
  // background (backgroundColor);
  //
  // headPosX = mouseX;
  // headPosY = mouseY;
  //
  // var bodyPosX = headPosX;
  // var bodyPosY = headPosY + 110;
// ends the movement section

  // put drawing code here
  //reference points
  /*point(100, 50);
  point(200, 50);
  point(300, 50);

  point(100, 100);
  point(200, 100);
  point(300, 100);*/

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

  //mouth
  fill("black");
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
}
