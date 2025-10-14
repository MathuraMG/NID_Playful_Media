function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0,50);

  // Perlin noise in 1D
  // let noiseValue = noise(0.01*frameCount + 1000);
  // let noiseMapped = map(noiseValue, 0, 1,10,200);
  // ellipse(width/2, height/2, noiseMapped);

  //Perlin noise in 2D

  for(let i=0;i<width;i+=5) {
    for(let j=0;j<height;j+=5){

      let outputNoise = noise((i+frameCount)*0.01,j*0.01);
      // console.log(outputNoise);
      fill(outputNoise*255);
      noStroke();
      rect(i,j,5,5);
    }
  }

  
  
}
