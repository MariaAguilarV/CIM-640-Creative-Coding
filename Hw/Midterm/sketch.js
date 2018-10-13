// var frameAmounts = 18; //we will use arrays in order to load multiple images
// var frameArray=[];
// var currentFrame=0;
// var interval = 500; // 2000 means 2 seconds
// var prevMillis = 0;
//
// var heart;
// var xPos = 300;
// var yPos = 0;
// var trigger = false;
// var speed = 3;
//
//
// var transition1 = true;
// var play= false;
// var winner = false;
// var end = false;
//
// function preload (){
//
//   for (var frames=0; frames < frameAmounts; frames++){
//     var frameString = "AssetsElephant/" + frames + ".png";
//     frameArray[frames] = loadImage(frameString);
//   }
//   heart = loadImage('AssetsElephant/heart.png');
// }
//
// function setup(){
//   createCanvas(700,525);
//
// }
//
// function draw(){
//
//   if (transition1 == true && play == false && winner == false){
//     image (frameArray[currentFrame],0,0);
//     if (millis() - prevMillis > interval){
//       currentFrame++;
//       prevMillis = millis();
//     }
//
//     if (currentFrame == 10){
//       play=true;
//       transition1 = false;
//     }
//   }
//
//   if (transition1 == false && play == true && winner == false){
//
//       image (frameArray[10],0,0);
//       image(heart,xPos, yPos, heart.width/15, heart.height/15);
//       yPos+=speed;
//
//         if (yPos > height){
//           play = false;
//           winner = false;
//         }
//   }
//
//   if (transition1 == false && play == false && winner == true && end==false){
//     image (frameArray[currentFrame],0,0);
//            if (millis() - prevMillis > interval){
//              currentFrame++;
//              prevMillis = millis();
//            }
//
//            if (currentFrame == 17){
//              end=true;
//            }
//   }
//
//   if (transition1==false && play==false && winner== true && end==true){
//     image (frameArray[17],0,0);
//   }
//
//
//   if (transition1 == false && play == false && winner == false) {
//     image (frameArray[11],0,0);
//   }
//
// }
//
// function mousePressed(){
//   var heartDist = dist(mouseX, mouseY, xPos, yPos);
//   if (heartDist < heart.width/15){
//     winner = true;
//     currentFrame = 12;
//     play = false;
//   }
// }


// test more than one heart

var frameAmounts = 18; //we will use arrays in order to load multiple images
var frameArray=[];
var currentFrame=0;
var interval = 500; // 2000 means 2 seconds
var prevMillis = 0;

var heart;
var xPos = 300;
var yPos = 0;
var trigger = false;
var speed = 3;


var transition1 = true;
var play= false;
var winner = false;
var end = false;

var numberOfHearts = 4;
var numberOfCatchedHearts = 0;
var heartsArray;

function preload (){

  for (var frames=0; frames < frameAmounts; frames++){
    var frameString = "AssetsElephant/" + frames + ".png";
    frameArray[frames] = loadImage(frameString);
  }
  heart = loadImage('AssetsElephant/heart.png');
  heartsArray = {
                  "heart1":[300,0,15,3,true],
                  "heart2":[200,0,17,1,true],
                  "heart3":[400,-20,20,3,true],
                  "heart4":[400,-0,25,4,true]
  }
}

function setup(){
  createCanvas(700,525);

}

function draw(){

  if (transition1 == true && play == false && winner == false){
    image (frameArray[currentFrame],0,0);
    if (millis() - prevMillis > interval){
      currentFrame++;
      prevMillis = millis();
    }

    if (currentFrame == 10){
      play=true;
      transition1 = false;
    }
  }

  if (transition1 == false && play == true && winner == false){

      image (frameArray[10],0,0);
      for (var keys in heartsArray){
          console.log(keys + " values:" + heartsArray[keys]);
          if (heartsArray[keys][4] == true){
            image(heart,heartsArray[keys][0], heartsArray[keys][1], heart.width/heartsArray[keys][2], heart.height/heartsArray[keys][2]);
             heartsArray[keys][1]+=heartsArray[keys][3];

              if (heartsArray[keys][1] > height){
                play = false;
                winner = false;
              }
          }
        }
  }

  if (transition1 == false && play == false && winner == true && end==false){
    image (frameArray[currentFrame],0,0);
           if (millis() - prevMillis > interval){
             currentFrame++;
             prevMillis = millis();
           }

           if (currentFrame == 17){
             end=true;
           }
  }

  if (transition1==false && play==false && winner== true && end==true){
    image (frameArray[17],0,0);
  }


  if (transition1 == false && play == false && winner == false) {
    image (frameArray[11],0,0);
  }

}

function mousePressed(){
  for (keys in heartsArray){
    var heartDist = dist(mouseX, mouseY, heartsArray[keys][0], heartsArray[keys][1]);
    if (heartDist < heart.width/heartsArray[keys][2]){
      heartsArray[keys][4] = false;
      numberOfCatchedHearts++;
    }

  }

  if (numberOfCatchedHearts == numberOfHearts) {
    winner = true;
    currentFrame = 12;
    play = false;
  }
}
