let spriteImage;
let sprites = [];
let spriteX = 10;
let spriteY = 6;
let count = 0;
let row = 0;
function preload() {
  spriteImage = loadImage("images/cat_fighter_sprite1.png");
}

function setup() {
  createCanvas(400, 400);
  for(let i = 0;i< spriteY; i++) {
    let spriteW = spriteImage.width/spriteX;
    let spriteH = spriteImage.height/spriteY;
    sprites[i] = [];
    for(let j=0;j<spriteX; j++) {
      sprites[i][j] = spriteImage.get(j*spriteW, i*spriteY, spriteW, spriteH);
    }
  }
}

function draw() {
  background(220);
  if(keyIsPressed) {
    count = frameCount%sprites[0].length;
    
  }
  image(sprites[row][count],100,100);
}

function keyPressed() {
  print(keyCode);
  if(keyCode == 32) {
    row = 0;
  }
}
