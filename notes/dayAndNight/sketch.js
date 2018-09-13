var sun;
var moon;

function preload(){
  // is useful for loading images, video, things that my website will load before my project starts.
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');

}
function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(255);
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

  if (mouseX <= width/2){ //once I know that my if statement work ok, then I do the action, this is why we always should add a console log
    console.log("Day Side");
    quad()
    image(sun,100,100);
  }

  if (mouseX > width/2){
    console.log("Night Side");
    image(moon,100,100);
  }
  //end of code
}
