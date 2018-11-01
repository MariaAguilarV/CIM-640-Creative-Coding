var posX = 0;
var posY = 0;
var rectSize = 100;
var colors = "green";

var button1;
var button2;

var buttonArray= [];

function setup() {
  createCanvas (400,400);
  button1 = new interfaces(100,200,50,"red", "Red Button");
  button2 = new interfaces(200,200,50, "green", "Green Button");

  for (var i=0; i<100; i++){
    var c = color(random(255), random(255), random(255));
    buttonArray[i] = new interfaces(random(width), random (height), 50,c,i);
  }
}

function draw() {
    // display();
    background(255);
    // display(random(width), random(height), random(255), random(0,100));
    button1.display();
    if (button1.check(mouseX, mouseY)){
      console.log(button1.name);
    }
    button2.display();
    button2.check(mouseX, mouseY);

    for (var i=0; i<buttonArray.length; i++){
      buttonArray[i].display();
      if (buttonArray[i].check(mouseX, mouseY)){
        console.log(buttonArray[i].name);
        background(buttonArray[i].color);
      }

    }
}

class interfaces{
  //constructor are the characteristics of the object, it contains the minimun parameters for this object to exist
  // reccomendation: always create the constructor and then display, then start creating other functions
  constructor(tempX,tempY, tempS, tempC, tempName){
    this.x = tempX;
    this.y = tempY;
    this.size = tempS;
    this.color = tempC;
    this.name = tempName;
    this.overlay = false;
  }

  display(){

    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    text(this.name, this.x, this.y - 10);

    if (this.overlay){
      fill(127,127);
      rect(this.x, this.y, this.size, this.size);
    }
  }

  check(mx, my){
    if (mx>this.x && mx<this.x + this.size && my> this.y && my<this.y + this.size){
      this.overlay = true;
      return true;
    }  else {
      this.overlay = false;
      return false;
    }
  }



}
