function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let i=0; i<width; i+=2) {
    for(let j =0;j<height; j+=2) {
      // let c = 255*noise(0.005*i, 0.005*j); //static
      let c = 255*noise(0.005*(i+frameCount), 0.005*(j+frameCount)); //animation
      fill(c);
      noStroke();
      rect(i,j,2,2);
    }
  }
}
