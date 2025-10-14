let topPaddle, bottomPaddle, ball;
let pWidth=60, pHeight=10;
let player1 = 0, player2 = 0;
function setup() {
  createCanvas(400, 400);
  topPaddle = new Paddle(width/2-pWidth/2, 0, pWidth, pHeight);
  bottomPaddle = new Paddle(width/2-pWidth/2, height-10, pWidth, pHeight);
  ball = new Ball(width/2, height/2);
}

function draw() {
  background(220);

  //move the top paddle with <- and ->
  if(keyIsDown(LEFT_ARROW)) {
    topPaddle.moveLeft();
  } else if(keyIsDown(RIGHT_ARROW)){
    topPaddle.moveRight();
  }

  //move the bottom paddle with A and D
  if(keyIsDown(65)) {
    bottomPaddle.moveLeft();
  } else if(keyIsDown(68)){
    bottomPaddle.moveRight();
  }
  
  topPaddle.drawPaddle();
  bottomPaddle.drawPaddle();


  // draw the ball
  ball.moveBall();
  ball.checkWallCollision();
  ball.checkCollision(topPaddle);
  ball.checkCollision(bottomPaddle);
  ball.drawBall();
}

function player1Wins() {
  player1++;
  console.log(player1, player2);
}

function player2Wins() {
  player2++;
  console.log(player1, player2);
}
