var frameAmounts = 4; //we will use arrays in order to load multiple images
var frameArray=[];
var currentFrame=0;

var interval = 2000; // 2000 means 2 seconds
var currentInterval = 2000;
var prevMillis = 0;

var interval2 = 2;
var prevMillis2 = 0;
var counter = 0;

function preload (){
  //var frameString = "assests/Thatwasclose0.jpg"//string that represents the path of the images in our computer
  //frameArray[0] = loadImage(frameString);

  for (var frames=0; frames < frameAmounts; frames++){
    var frameString = "assests/Thatwasclose" + frames + ".jpg";
    frameArray[frames] = loadImage(frameString);
  }
}

function setup(){
  createCanvas(500,500);
}

function draw(){
  //frameRate(1) we don't use this because it slows down the mouse, thats why we are going to use millis (create a timer)
  console.log (millis())
  image (frameArray[currentFrame],0,0);
  if (millis() - prevMillis > interval){   //we use greater and not iqual because when there is a lot of code, you might miss a millis
    currentFrame++;
    prevMillis = millis();
  }

  if (millis()-prevMillis2 > interval2){
    counter++;
    prevMillis2 = millis();
  }

  ellipse(counter,height/2,20,20);
  // if (millis()> currentInterval){   //we use greater and not iqual because when there is a lot of code, you might miss a millis
  //   currentFrame++;
  //   currentInterval = currentInterval+interval;
  // }


  if (currentFrame > frameAmounts-1){
    currentFrame =0;
  }

  if (counter > width) {
    counter= 0;
  }
}
