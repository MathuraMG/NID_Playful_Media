class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.xSpeed = 3;
    this.ySpeed = 4;
  }

  moveBall() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    // print(this.x);
  }
  drawBall() {
    ellipse(this.x, this.y, this.size);
  }
  checkWallCollision() {
    //check collision against vertical walls
    if(this.x> width || this.x < 0) {
      print("this.x > width", this.xSpeed)
      this.xSpeed = -this.xSpeed;
    }
    if(this.y<0) {
      player1Wins();
      this.resetBall();
    } else if(this.y>height) {
      player2Wins();
      this.resetBall();
    }
  }
  checkCollision(paddle) {
    
    // check collision against paddle
    if(this.x<paddle.x+paddle.width &&
      this.x > paddle.x &&
      this.y<paddle.y + paddle.height &&
      this.y > paddle.y
    ) {
      print("kaboom")
      this.ySpeed = -this.ySpeed;
    }
  }

  resetBall() {
    this.x = width/2;
    this.y = height/2;
    this.xSpeed = random(-3,3);
    this.ySpeed = random(-3,3);
  }




}