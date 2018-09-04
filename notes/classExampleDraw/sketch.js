var a = 1;
var num1 = 3;
var b = 'b'
var word = "word";
var trueFalse = true; //camelcase: start with lowercasse, it is case sensitive
var sentences = "I am a sentence";

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
  stroke ('black');
  strokeWeight(num1);

  fill('orange');
  // eyes
  ellipse(120,120,50,50);
  ellipse (180,120,50,50);
  //mouth
  rect (120,220,50,20);

//mole
  stroke('red');
  strokeWeight(5);
  point(width/2, height/2);

  line(120,230,170,230);

  //pacperson
  arc(50,200,100,100,QUARTER_PI, PI + HALF_PI + QUARTER_PI);
  arc(50,350,100,100,QUARTER_PI, TWO_PI - QUARTER_PI);
}
