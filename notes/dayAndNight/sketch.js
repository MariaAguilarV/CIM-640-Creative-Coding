var sun;

function preload(){
  // is useful for loading images, video, things that my website will load before my project starts.
  sun = loadImage('assets/sun.png');

}
function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  image(sun, 100,100);
}
