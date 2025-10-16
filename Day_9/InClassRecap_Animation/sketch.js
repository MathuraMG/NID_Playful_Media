let isMoving = false;
let x = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(isMoving) {
    x+=3;
  }
  drawCar(x,200);
  console.log(x);
}

function drawCar(x,y) {
  rect(x,y,40,20);
  ellipse(x+10,y+20,10);
  ellipse(x+30,y+20,10);
}

function mousePressed() {
  console.log("Clicked!");

  isMoving = !isMoving;
  //The above line can be expanded as shown below
  /*
  if(isMoving == true) {
    isMoving = false
  } else if(isMoving==false) {
    isMoving = true;
  }
  */
}
