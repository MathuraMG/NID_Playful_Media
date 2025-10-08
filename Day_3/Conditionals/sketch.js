function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  rect(200,200,50,50);

}

function mouseClicked() {
  if(mouseX<250 && mouseX>200 &&mouseY>200 && mouseY<250) {
    console.log("button clicked");
  }




  //get xposition of mouse --> mouseX
  //if mouseX is on the left -> mouseX < width/2 -> draw yellow ellipse
  //else draw red ellipse
  if (mouseX < width / 2) {
    fill("yellow");
    ellipse(mouseX, mouseY, 20);
  } else {
    fill("red");
    ellipse(mouseX, mouseY, 20);
  }


}
