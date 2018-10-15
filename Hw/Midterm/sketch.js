// var frameAmounts = 18;
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
// var numberOfHearts = 4;
// var numberOfCatchedHearts = 0;
// var heartsArray;
//
// function preload (){
//
//   for (var frames=0; frames < frameAmounts; frames++){
//     var frameString = "AssetsElephant/" + frames + ".png";
//     frameArray[frames] = loadImage(frameString);
//   }
//   heart = loadImage('AssetsElephant/heart.png');
//   heartsArray = {
//                   "heart1":[300,0,15,3,true],
//                   "heart2":[200,0,17,1,true],
//                   "heart3":[400,-20,20,3,true],
//                   "heart4":[400,-0,25,4,true]
//   }
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
//       for (var keys in heartsArray){
//           console.log(keys + " values:" + heartsArray[keys]);
//           if (heartsArray[keys][4] == true){
//             image(heart,heartsArray[keys][0], heartsArray[keys][1], heart.width/heartsArray[keys][2], heart.height/heartsArray[keys][2]);
//              heartsArray[keys][1]+=heartsArray[keys][3];
//
//               if (heartsArray[keys][1] > height){
//                 play = false;
//                 winner = false;
//               }
//           }
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
//   for (keys in heartsArray){
//     var heartDist = dist(mouseX, mouseY, heartsArray[keys][0], heartsArray[keys][1]);
//     if (heartDist < heart.width/heartsArray[keys][2]){
//       heartsArray[keys][4] = false;
//       numberOfCatchedHearts++;
//     }
//
//   }
//
//   if (numberOfCatchedHearts == numberOfHearts) {
//     winner = true;
//     currentFrame = 12;
//     play = false;
//   }
// }

//random numero de corazones

// var frameAmounts = 18;
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
// var numberOfHearts = 0;
// var numberOfCatchedHearts = 0;
// var heartsArray = [];
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
//   numberOfHearts = int(random(1,5));
//   for (var i=0; i<numberOfHearts; i++){
//     heartsArray.push(new heartGenerator());
//   }
// }
//
// function heartGenerator() {
//   this.x = random(600);
//   this.y = 0;
//   this.width = random(5,15);
//   this.speed = random(1,5);
//   this.show = true;
// }
//
// function draw(){
//
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
//       for (var i=0; i<heartsArray.length; i++){
//          console.log("number of hearts:" + numberOfHearts);
//           console.log(heartsArray[i].x);
//           if (heartsArray[i].show == true){
//             image(heart,heartsArray[i].x, heartsArray[i].y, heart.width/heartsArray[i].width, heart.height/heartsArray[i].width);
//              heartsArray[i].y+=heartsArray[i].speed;
//
//               if (heartsArray[i].y > height){
//                 play = false;
//                 winner = false;
//               }
//           }
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
//
//   }
//
// }
//
// function mousePressed(){
//   for (var i=0; i<heartsArray.length; i++){
//     var heartDist = dist(mouseX, mouseY, heartsArray[i].x, heartsArray[i].y);
//     if (heartDist < heart.width/heartsArray[i].width){
//       heartsArray[i].show = false;
//       numberOfCatchedHearts++;
//     }
//
//   }
//
//   if (numberOfCatchedHearts == numberOfHearts) {
//     winner = true;
//     currentFrame = 12;
//     play = false;
//   }
// }

//button restart game

var frameAmounts = 18;
var frameArray=[];
var currentFrame=0;
var interval = 500; // 2000 means 2 seconds
var prevMillis = 0;

var heart;
var restart;
var xPos = 300;
var yPos = 0;
var trigger = false;
var speed = 3;


var transition1 = true;
var play= false;
var winner = false;
var end = false;

var numberOfHearts = 0;
var numberOfCatchedHearts = 0;
var heartsArray = [];

function preload (){

  for (var frames=0; frames < frameAmounts; frames++){
    var frameString = "AssetsElephantEnhanced/" + frames + ".png";
    frameArray[frames] = loadImage(frameString);
  }
  heart = loadImage('AssetsElephantEnhanced/heartBallon.png');


}

function setup(){
  createCanvas(700,525);
  numberOfHearts = int(random(1,5));
  for (var i=0; i<numberOfHearts; i++){
    heartsArray.push(new heartGenerator());
  }

}

function heartGenerator() {
  this.x = random(600);
  this.y = 0;
  this.width = random(5,15);
  this.speed = random(1,5);
  this.show = true;
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
      for (var i=0; i<heartsArray.length; i++){
         console.log("number of hearts:" + numberOfHearts);
          console.log(heartsArray[i].x);
          if (heartsArray[i].show == true){
            image(heart,heartsArray[i].x, heartsArray[i].y, heart.width/heartsArray[i].width, heart.height/heartsArray[i].width);
             heartsArray[i].y+=heartsArray[i].speed;

              if (heartsArray[i].y > height){
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
    //rect (470,370,150,50);
  }

}

function mousePressed(){
  for (var i=0; i<heartsArray.length; i++){
    var heartDist = dist(mouseX, mouseY, heartsArray[i].x, heartsArray[i].y);
    if (heartDist < heart.width/heartsArray[i].width){
      heartsArray[i].show = false;
      numberOfCatchedHearts++;
    }

  }

  if (numberOfCatchedHearts == numberOfHearts) {
    winner = true;
    currentFrame = 12;
    play = false;
  }

  if (transition1 == false && play == false && winner == false) {
    if (mouseX>470 && mouseX<470+150 && mouseY>370 && mouseY<420){
      transition1=true;
      play=false;
      winner=false;
      end=false;
      currentFrame = 0;
      numberOfHearts = 0;
      numberOfCatchedHearts = 0;
      heartsArray = [];

      numberOfHearts = int(random(1,5));
      for (var i=0; i<numberOfHearts; i++){
        heartsArray.push(new heartGenerator());
      }
    }
    //rect (515,450,150,50);
  }
}
