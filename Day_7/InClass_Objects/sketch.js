let flowers = [];
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(220);
  for(let i =0;i<flowers.length;i++) {
    //check if the current mX and mY is on the flower
    flowers[i].checkMousePosition(mouseX, mouseY);

    //check collision with ALL other flowers
    for(let j = 0;j<flowers.length;j++) {
      if(i!=j) {
        flowers[i].checkCollision(flowers[j]);
      }
      
    }
    

    //moves and draws the flower
    flowers[i].moveFlower();
    flowers[i].drawFlower();
  }
}


function mousePressed() {
  let tempFlower = new Flower(mouseX, mouseY, random(-10,10), random(-10,10));
  flowers.push(tempFlower);
}
//draw a flower at the point where I click on the canvas 
//STEPS 
// click somewhere -> mousePressed
// create a flower  at mouse Position-> let variable = new Flower (mouseX, mosueY)

