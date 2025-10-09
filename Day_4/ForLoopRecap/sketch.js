let x=0, y=0, size = 50;
function setup() {
  // frameRate(5);
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(20);
  //create a grid of squares
  for(let i=0;i<width;i=i+size) {
    for(let j =0;j<height;j=j+size) {
      noStroke();
      fill(250,60,120);

      push();
      translate(i,j);
      rotate(frameCount*20);
      
      rect(0,0,size/2*sin(frameCount), size/2*sin(frameCount));
      pop();


    }
  }
}
