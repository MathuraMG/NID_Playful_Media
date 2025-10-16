let noGrids = 4;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let size = width / noGrids;
  for (let i = 0; i < width; i += size) {
    for (let j = 0; j < height; j += size) {
      
      ellipse(i + size / 2, j + size / 2, size);
      text(i +" " +j, i+size/2,j+size/2);
    }
  }
}
