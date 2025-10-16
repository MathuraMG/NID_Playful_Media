let spriteImg;
let sprites = [];
let noRows = 4;
let noCols = 12;

let xSpeed =0;
let ySpeed =0;
let xPos = 200;
let yPos = 200;
let dir =0; //0 DOWN 1 LEFT 2 RIGHT 3 UP
let count = 0;

function preload() {
  spriteImg = loadImage("assets/walking.png");
}

function setup() {
  createCanvas(400, 400);
  // console.log(spriteImg.width);
  // console.log(spriteImg.height);
  for(let i =0;i<noRows;i++) {
    sprites[i] = [];
    for(let j=0;j<noCols;j++) {
      let sWidth = spriteImg.width/noCols;
      let sHeight = spriteImg.height/noRows;
      sprites[i][j] = spriteImg.get(j*sWidth, i*sHeight, sWidth, sHeight);//the image sprite part;
    }
  }
  
}

function draw() {
  background(220);


  xPos += xSpeed;
  yPos += ySpeed;
  
  image(sprites[dir][count%noCols],xPos, yPos);

  if(keyIsDown(DOWN_ARROW)) {
    dir = 0;
    ySpeed = 5;
    xSpeed = 0;
    count++;
  } else if(keyIsDown(LEFT_ARROW)) {
    dir = 1; 
    ySpeed = 0;
    xSpeed = -4;
    count++;
  } else if(keyIsDown(RIGHT_ARROW)) {
    dir = 2;
    ySpeed = 0;
    xSpeed = 4;
    count++;
  } else if(keyIsDown(UP_ARROW)) {
    dir = 3;
    ySpeed = -5;
    xSpeed = 0;
    count++;
  } else {
    xSpeed = 0;
    ySpeed=0;
  }

}


