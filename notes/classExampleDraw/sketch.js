var a = 1;
var num1 = 3;
var b = 'b'
var word = "word";
var trueFalse = true; //camelcase: start with lowercasse, it is case sensitive
var sentences = "I am a sentence";

var charColor = "orange"; //it doesn't mean that this color will be the same always, it can change over time
var eyeSize = 20;

var facePosX = 100;
var facePosY = 100;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(0);
  background(0,0,255);
  background("orange");
  background ("#333363");

  console.log(a+num1); // tell you what your variables are doing trhoughout a program
  console.log(a-num1);
  console.log(a+b); //add a number and a letter, it concatenates
  console.log(a*b); // Error: NaN not a number

  //this is only in setup scope
  var setupVariable = 5;

}

function draw() {
  // put drawing code here

  background ("#333363"); //it help to not override again and again and again

  // set our variables x and y with the mouse
  facePosX = mouseX;
  facePosY = mouseY;

  stroke ('black');
  strokeWeight(num1);

  fill(charColor);
  // eyes
  ellipse(facePosX,facePosY,eyeSize,eyeSize);
  ellipse (facePosX + 60,facePosY,eyeSize,eyeSize);
  //mouth
  rect (facePosX,facePosY + 200,50,20);

//mole
  stroke('red');
  strokeWeight(5);
  point(width/2, height/2);
  //curve(120, 100, 160, 200, 120, 300, 160, 400, 120, 450, 160, 460);

  line(facePosX,facePosY+210,facePosX + 50,facePosY + 210);

  //pacperson
  //arc(50,200,100,100,QUARTER_PI, PI + HALF_PI + QUARTER_PI);
  arc(facePosX + 30,facePosY + 100,100,100,QUARTER_PI, TWO_PI - QUARTER_PI);
}

// thw browser always listen if the mouse is pressed
function mousePressed(){
  charColor = "green";
}
