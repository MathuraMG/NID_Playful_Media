let noPetals = 17;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  drawFlower(10,0,100);
  drawFlower(10,100,0);

  drawFlower(10,200,300);

}

function drawFlower(petals,x,y) {

  push();
  //move origin to center of canvas
  translate(x,y);
  
  //center of flower
  ellipse(0,0,50,50);
  rotate(frameCount);
  //petals
  for(let i=0; i<petals;i++) {
    noStroke();
    fill(200,30,30,100);
    ellipse(80,0,100,50);
    rotate(360/petals);
  }
  

  pop();
}
