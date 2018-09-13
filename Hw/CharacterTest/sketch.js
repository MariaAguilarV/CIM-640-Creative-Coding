var headPosX = 200;
var headPosY = 100;

function setup() {
  // put setup code here
  // put setup code here
  createCanvas(400,400);
  background("white");
}

function draw() {
  // put drawing code here
  //reference points
  strokeWeight (1);
  point(100, 50);
  point(200, 50);
  point(300, 50);

  point(100, 100);
  point(200, 100);
  point(300, 100);

  //head
  fill ("white");
  ellipse(headPosX,headPosY+45,120,50);
  ellipse(headPosX-30,headPosY,50,110);
  ellipse(headPosX+15,headPosY,70,110);

  strokeWeight(0);
  quad(headPosX-58,headPosY+55,headPosX-25,headPosY-35,headPosX+70,headPosY-40,headPosX+60,headPosY+60);

  strokeWeight(1);
  noFill();
  beginShape();
  vertex(headPosX+10, headPosY+40);
  bezierVertex(headPosX-55, headPosY+10, headPosX -80, headPosY -50, headPosX-30, headPosY -75);

  //eyes
  strokeWeight(1);
  fill ("black");
  ellipse (headPosX - 25,headPosY-15,23,30);
  ellipse (headPosX + 5,headPosY-15,23,30);

    //eyeslashes
    noFill();
    arc(headPosX - 23,headPosY-37, 15, 15, HALF_PI, PI);
    arc(headPosX - 25,headPosY-35, 15, 15, HALF_PI, PI);
    arc(headPosX - 27,headPosY-33, 15, 15, HALF_PI, PI);
    arc(headPosX - 29,headPosY-31, 15, 15, HALF_PI, PI);
    arc(headPosX - 31,headPosY-29, 15, 15, HALF_PI, PI);

    arc(headPosX + 3,headPosY-37, 15, 15, 0, HALF_PI);
    arc(headPosX + 5,headPosY-35, 15, 15, 0, HALF_PI);
    arc(headPosX + 7,headPosY-33, 15, 15, 0, HALF_PI);
    arc(headPosX + 9,headPosY-31, 15, 15, 0, HALF_PI);
    arc(headPosX + 11,headPosY-29, 15, 15, 0, HALF_PI);

  strokeWeight(0);
  fill ("white");
  ellipse (headPosX - 25,headPosY-22,21,15);
  ellipse (headPosX - 25,headPosY-5,17,10);

  ellipse (headPosX + 5,headPosY-22,21,15);
  ellipse (headPosX + 5,headPosY-5,17,10);

  //mouth
  strokeWeight(1);
  noFill();
  arc(headPosX-10,headPosY+30, 35, 13, 0, PI);

  fill("black");
  beginShape();
  vertex(headPosX, headPosY+36);
  bezierVertex(headPosX, headPosY+50, headPosX -20, headPosY + 50, headPosX-22, headPosY + 35);
  endShape();

  //hair
  strokeWeight(1);
  noFill();
  beginShape();
  vertex(headPosX-60, headPosY+38);
  bezierVertex(headPosX-55, headPosY+10, headPosX -80, headPosY -50, headPosX-30, headPosY -75);
  bezierVertex(headPosX-5, headPosY-80, headPosX, headPosY-80, headPosX+5, headPosY-82);
  bezierVertex(headPosX+15, headPosY-82, headPosX+60, headPosY-90, headPosX+100, headPosY+10);
  bezierVertex(headPosX+100, headPosY+20, headPosX+105, headPosY+30, headPosX+120, headPosY+100);
  endShape();

}
