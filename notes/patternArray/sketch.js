var curImage, sun , moon;

var selection, textInput, submitButton;
var numberOfImages = 0;

// var posX = [0,100,200,300];
// var posY = [0,100,200,300];

var posX = [];
var posY = [];

function preload (){
  sun = loadImage("assets/sun.png");
  moon = loadImage("assets/moon.png");
}

function setup() {
  // put setup code here
    createCanvas (400,400);
    selection = createSelect();
    selection.position(10,10);
    selection.option("sun");
    selection.option("moon");
    selection.changed(function(){ //change is the equivalente to mousepressed for a button, whenever there is a change on selection, then you wanna do something
      //console.log(selection.value ());
    });

    textInput = createInput("# of images");
    textInput.position(10,30);

    submitButton = createButton("Create Pattern");
    submitButton.position(10,50);
    submitButton.mousePressed(function(){
        numberOfImages = textInput.value();
        console.log(numberOfImages);

        if (selection.value() == "sun"){
          curImage = sun;
        }else if (selection.value() == "moon"){
          curImage = moon;
        }

        posX =[];
        posY =[];

        for (var a=0; a<numberOfImages; a++){
          posX[a] = random (width);
          posY[a] = random (height);
          console.log("x: " + posX[a]+ " y:" + posY[a]);
        }

    });
    curImage = sun;

}

function draw() {
  // put drawing code here
  background (255);
  // frameRate(10);
  // for (var i=0;i<numberOfImages; i++){
  //   console.log(i);
  //   image(curImage,random(width),random(height), curImage.width/random(1,5),curImage.height/random(1,5));
  // }

  for (var i=0; i<posX.length; i++){

    image(curImage, posX[i], posY[i], curImage.width/4, curImage.height/4)

  }
  //end of code
}
