var frameAmounts = 4; //we will use arrays in order to load multiple images
var frameArray=[];
var currentFrame=0;

var interval = 2000; // 2000 means 2 seconds
var currentInterval = 2000;
var prevMillis = 0;

var interval2 = 2;
var prevMillis2 = 0;
var counter = 0;

var controls = {
                  "play" : [50,400,50,"green"],
                  "stop" : [110,400,50,"red"],
                  "forward": [170,400,50,"purple"],
                  "back": [230,400,50,"blue"],
                }; // {x,y,size, color}key value pairs: index array: with words indexes, instead of number indexes

var state = "stop";

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
  // console.log(controls["play"]);
  // console.log(controls["play"][3]); //green

  for (var keys in controls){ //how to do a for loop for a key valu pair array
    console.log(keys + " values:" + controls[keys]);
  }
}

function draw(){
  //frameRate(1) we don't use this because it slows down the mouse, thats why we are going to use millis (create a timer)
  // console.log (millis())
  image (frameArray[currentFrame],0,0);
  if (millis() - prevMillis > interval && state == "play"){   //we use greater and not iqual because when there is a lot of code, you might miss a millis
    currentFrame++;
    prevMillis = millis();
  }
  //for homework, esta facil porque el if de arriba es son state play, entonces solo falta a;adir si es q el estado es forward haces currentframe++, si el estado es bach, haces currenframe --
  //
  // if (millis()-prevMillis2 > interval2){
  //   counter++;
  //   prevMillis2 = millis();
  // }
  //
  // ellipse(counter,height/2,20,20);
  // if (millis()> currentInterval){   //we use greater and not iqual because when there is a lot of code, you might miss a millis
  //   currentFrame++;
  //   currentInterval = currentInterval+interval;
  // }

  if (currentFrame > frameAmounts-1){
    currentFrame =0;
  }

  // if (counter > width) {
  //   counter= 0;
  // }

  for (var keys in controls){
    fill(controls[keys][3]);
    rect(controls[keys][0], controls[keys][1], controls[keys][2], controls[keys][2]);
    text(keys,controls[keys][0], controls[keys][1]);

    if(mouseX > controls[keys][0] && mouseX < controls[keys][0]+controls[keys][2] &&
      mouseY >controls[keys][1] && mouseY < controls[keys][1]+ controls[keys][2]){
        fill (127,200);
        rect(controls[keys][0], controls[keys][1], controls[keys][2], controls[keys][2]);
      }
  }
}

function mousePressed(){
    for (var keys in controls){
      if(mouseX > controls[keys][0] && mouseX < controls[keys][0]+controls[keys][2] &&
         mouseY > controls[keys][1] && mouseY < controls[keys][1]+controls[keys][2]){
            state = keys;  //after this statement we check if the key is forward or back, it should then advance the frame
            if (state == "forward"){
              currentFrame++;
              if (currentFrame >= frameArray.length){
                currentFrame = 0;
              } else if (state == "back"){
                currentFrame--;
                if (currentFrame < 0){
                  currentFrame = frameArray.length - 1;
                }
              }
            }
              // console.log("I have pressed forward");
              // if (currentFrame < frameAmounts-1){
              //   currentFrame++;
              // }
              // else {
              //     currentFrame=0;
              // }
              // //image (frameArray[currentFrame],0,0);

            // if (state == "back"){
            //   // console.log("I have pressed back");
            //   if (currentFrame-1 < 0){
            //     currentFrame=frameArray.length - 1;
            //   }
            //   else {
            //       currentFrame=currentFrame-1;
            //   }
            //   //image (frameArray[currentFrame],0,0);
            // }


      }
    }


}
