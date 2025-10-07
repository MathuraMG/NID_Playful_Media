let xPos;
function setup() {
  xPos = 0;
  createCanvas(400, 400);
  background(220,0,0);
}

function draw() {

  

}

function mousePressed() {
  drawCar(mouseX, mouseY);
}


// defining function
function drawCar(x,y) {
  rect(x,y,40,30);
  ellipse(x+5,y+35,10,10);
  ellipse(x+35,y+35,10,10);
}

//calling function 