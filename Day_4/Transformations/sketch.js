let size = 100;
function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(20);
  for(let i=0;i<width;i+=size) {
    for(let j=0;j<height;j+= size) {
      noStroke();
      push();
      translate(i,j);
      fill(i/5, j/5, 100);
      rotate(frameCount*(width/mouseX));
      drawFlower(0,0,size,floor((i+j)%18+6));
      pop();
    }
  }
}

function drawFlower(x,y,size,petals) {
  push();
  for(let i=0;i<petals;i++) {
    fill(200,40,70,100);
    ellipse(0,size/4,size/6,size/2);
    rotate(360/petals);
  }
  fill(120,120,0);
  ellipse(0,0,size/6);
  pop();
}