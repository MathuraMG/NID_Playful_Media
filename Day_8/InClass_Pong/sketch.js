let gBall;
let lPaddle, rPaddle;
let player1=0, player2=0;

let wallCollisions = 0;

let pingSound, bgMusic;

function preload() {
  pingSound = loadSound("assets/2.mp3");
  bgMusic = loadSound("assets/long2.mp3");
}


function setup() {
  createCanvas(800, 400);
  gBall = new Ball(width/2, height/2, 5,5);

  //create the paddles
  let pWidth = 10, pHeight = 80;
  lPaddle = new Paddle(0, height/2 -pHeight/2,pWidth, pHeight,10);
  rPaddle = new Paddle(width-pWidth, height/2 -pHeight/2,pWidth, pHeight,10 );
  // bgMusic.loop();

  
  
}

function draw() {

  background(220);

  if(wallCollisions >3) {
    background(220,0,0);
  }

  //BALL BEHAVIOUR

  gBall.move();
  gBall.checkCollisionPaddle(lPaddle);
  gBall.checkCollisionPaddle(rPaddle);
  gBall.checkCollisionWall();
  gBall.show();

  let point = gBall.checkWinner();
  if(point == 1) {
    player1++;
    gBall.reset();
    console.log("p1 vs p2 :" + player1 + " " + player2)
  } else if(point ==2 ) {
    player2++;
    gBall.reset();
    console.log("p1 vs p2 :" + player1 + " " + player2)
  }


  

  // PADDlE BEHAVIOUR
  //if keys UP and DOWN are pressed, move the right paddle
  if(keyIsDown(UP_ARROW)) {
    rPaddle.moveUp();
  } else if(keyIsDown(DOWN_ARROW)){
    rPaddle.moveDown();
  } 
  //if keys W and S are pressed, move the left paddle
  if(keyIsDown(87)) {
    lPaddle.moveUp();
  } else if(keyIsDown(83)){
    lPaddle.moveDown();
  } 

  lPaddle.show();
  rPaddle.show();
}
