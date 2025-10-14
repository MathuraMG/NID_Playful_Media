function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  let outputValue = 0
  outputValue = map(mouseX, 0,width,255,0);
  background(outputValue);
  console.log(outputValue);
  //make it such that the background changes from black to white GRADUALLY as you move across the canvas

  //outputvalue = map(inputvalue, inputstart, inputend, outputstart,outputend);
  
}
