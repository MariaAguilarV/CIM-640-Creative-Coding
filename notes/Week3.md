projection mapping - mad mapper is a software

-- Continue ClassExampleDraw
1. point is a representation of a single pixel
point(width/2, height/2); -> using width and height allows changing the canvas
2. stroke is the outline that round the shape.
  Stroke acts as a switched. When the program starts, the stroke is black, then the switch turn on to red. if we want to change the stroke to white, then we have to specify it.
  3. IN p5js / references, I can find stroke and more functions fore stroke
4. fill is used to fill color. Stroke is for borders

#### variables
5. We want our draws scale with our screen size, using a variable
6. a variable is an alphanumeric representation of different things.
7. to declare variables we use 'var'
8. declare variables above the setup. declaring at the top at the program, means they are global variables. If I declare a variable in the setup, it is only available in the setup.
9. is good to comment your code!

## Assignment for next class!!
For example, a pirate that will dance when you press a button
How do people will interact with this character
the only requirement is to use 5 variables!!!

------ Class 2-----------
use variables to make movements
Position x and position y, that control all our drawing

To make movement:
1. set the background first
2. we have to attach the variables x and y to the mouse position
3. reset the canvas because we are drawing in the same canvas.
reset the canvas to have a fresh canvas and a stamp

Different ways of interaction:
1. this thing following you around
2. mousePressed

#### managing images
We can use the images in the following file:
https://github.com/zevenrodriguez/CIM540-640/blob/master/notes/Copywrite.md

download dayAndNight from github
is a good practice to use "Assets" where I should save all my images

.png is recommended to be used in p5js
in png we can have the background transparent
