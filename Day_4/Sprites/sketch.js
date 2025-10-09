let sprite, sX, sY, sW, sH;
let count = 0;
let sArray = [];
function preload() {
  sX = 8;
  sY = 4;

  sprite = loadImage("images/explosionFull.png");

}

function setup() {
  createCanvas(400, 400);
  sW = sprite.width / sX;
  sH = sprite.height / sY;
  console.log(sprite);
  for (let i = 0; i < sY; i++) {
    for (let j = 0; j < sX; j++) {
      sArray[i * sX + j] = sprite.get(j * sW, i * sH, sW, sH);
    }
  }
  console.log(sArray)
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    count++;
    if (count >= sX * sY) {
      count = 0;
    }
    image(sArray[count], 0, 0);
  }

}
