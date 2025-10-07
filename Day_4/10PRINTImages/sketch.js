let grid = [];
function preload() {
  grid[0] = loadImage('images/gArt-01.png');
  grid[1] = loadImage('images/gArt-02.png');
  grid[2] = loadImage('images/gArt-03.png');
  grid[3] = loadImage('images/gArt-04.png');
}

function setup() {
  frameRate(2);
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  for(let i =0;i<width;i+=50) {
    for( let j =0;j<height;j+=50) {
      let no = floor(random(0,4));
      image(grid[no],i,j,50,50);
    }
  }
}
