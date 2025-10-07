function setup() {
  createCanvas(1000, 1000);
  background(220);
  
}

function draw() {
  noStroke();
  fill(mouseX/2,mouseY/2,mouseX/4+mouseY/4);
  
  //follows the mouse
  ellipse(mouseX, mouseY, 50);

  //mirrors the mouse along the x axis
  ellipse(width - mouseX, mouseY, 50);

  //mirrors the mouse along the y axis
  ellipse(mouseX, height - mouseY, 50);

  //mirrors the mouse along both the axis
  ellipse(width-mouseX, height - mouseY, 50);

}
