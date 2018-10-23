var posX = 0;
var posY = 0;
var rectSize = 100;
var colors = "green";

function setup() {
  createCanvas (400,400);

}

function draw() {
    // display();
    background(255);
    // display(random(width), random(height), random(255), random(0,100));
    display(posX, posY, "red", rectSize);
    var box1 = check(mouseX, mouseY, posX, posY, rectSize);
    if (box1==true){
      background ("green");
    }

    display(posX+100, posY+100, "green", rectSize);
    var box2 = check(mouseX, mouseY,posX+100, posY+100, rectSize);
    if (box2 == true){
      background("red");
    }
}



// function display(){
//   fill(colors);
//   ellipse(posX,posY,rectSize,rectSize);
// }

function display(tempX, tempY, tempC, tempS){
  fill(tempC);
  ellipse(tempX,tempY,tempS,tempS);
}

function check(mX, mY, locX, locY, tempRsize){
  if (mX> locX && mX< locX + tempRsize && mY>locY && mY<locY + tempRsize){
    console.log("in box");
    return true;
  } else{
    return false;
  }
}
