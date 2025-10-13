let spriteImg;
let sRows = 4, sCols = 8;
let sprites = [];
let count = 0;

let xDir = 0;
let xPos = 100;

function preload() {
  spriteImg = loadImage("images/explosionFull.png") ;
}

function setup() {
  createCanvas(innerWidth, innerHeight);

  let sWidth = spriteImg.width/sCols;
  let sHeight = spriteImg.height/sRows;

  //loop the sprite image and store it in a 1D array sprites
  for(let i=0;i<sRows;i+=1) {
    for(let j=0;j<sCols;j+=1) {
      //get that slice of the sprite
      //store it in the array sprites
      sprites[sprites.length] = 
      spriteImg.get(j*sWidth,i*sHeight,sWidth,sHeight);
      //image.get needs (x,y,width,height) of the part that you want from the original image
      
    }
  }
  console.log(sprites);
}

function draw() {
  background(220);
  
  if(isKeyPressed) {
    count++;  
    xPos = xPos + xDir;
  }
  
  image(sprites[count%sprites.length],xPos,0);


}

function keyPressed() {
  if(keyCode == 37) { //left
    xDir = -5;

  }
  else if(keyCode == 39) { //right
    xDir = 5;
  }
}
