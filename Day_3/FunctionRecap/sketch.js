function setup() {
  createCanvas(1000, 1000);
  background(220);
}

function draw() {
  
}


function mousePressed() {
  let petalSize;
  petalSize = random(20,50);

  drawFlower(mouseX, mouseY, petalSize);

}

//defining the function with params x and y
function drawFlower(x,y,petal) {

  //flower petals -> top, bottom, left, right
  fill(random(100,250),0,0);


  noStroke();
  ellipse(x,y-petal/2,petal);
  ellipse(x,y+petal/2,petal);
  ellipse(x-petal/2,y,petal);
  ellipse(x+petal/2,y,petal);

  //center of flower
  fill("yellow");
  ellipse(x,y,petal);

}