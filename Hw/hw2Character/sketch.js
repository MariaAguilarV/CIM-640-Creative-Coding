var headPosX = 200;
var headPosY = 100;

var bodyPosX = headPosX;
var bodyPosY = headPosY + 110;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(255,204,255);
}

function draw() {
  // put drawing code here
  //reference points
  point(100, 50);
  point(200, 50);
  point(300, 50);

  point(100, 100);
  point(200, 100);
  point(300, 100);

  //head
  fill ("white");
  ellipse (headPosX,headPosY,150,100);

  //body
  ellipse(bodyPosX,bodyPosY,200,150);

  //ears
  //noFill();
  beginShape();
  vertex(headPosX - 20, headPosY - 45);
  bezierVertex(headPosX - 50, headPosY - 75, headPosX - 50, headPosY - 60, headPosX - 50, headPosY - 30);
  endShape();

  beginShape();
  vertex(headPosX + 20, headPosY - 45);
  bezierVertex(headPosX + 50, headPosY - 75, headPosX + 50, headPosY - 60, headPosX + 50, headPosY - 30);
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

  /*beginShape();
  vertex(headPosX+20, 20);
  bezierVertex(headPosX+20, 40, headPosX-20, 40, headPosX-20, 20);
  bezierVertex(headPosX-10, 30, headPosX+10,30 ,headPosX+20, 20);
  endShape();*/

  beginShape();
  vertex(headPosX+20, headPosY+10);
  bezierVertex(headPosX+20, headPosY+17, headPosX-20, headPosY+17, headPosX-20, headPosY+10);
  bezierVertex(headPosX-10, headPosY+40, headPosX+10,headPosY+40 ,headPosX+20, headPosY+10);
  endShape();

  //tooth
  fill("white");
  quad(headPosX+20, headPosY+10, headPosX+23, headPosY+18,headPosX+15,headPosY+21,headPosX+12,headPosY+13);
  quad(headPosX-20, headPosY+10, headPosX-23, headPosY+18,headPosX-15,headPosY+21,headPosX-12,headPosY+13);

  //arms
  fill("white");
  beginShape();
  vertex(bodyPosX-40, bodyPosY-70);
  bezierVertex(bodyPosX-170, bodyPosY-55,bodyPosX-180, bodyPosY-30, bodyPosX-80, bodyPosY-45);
  endShape();
}
