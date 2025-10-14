class Paddle {
  constructor(x,y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dir = 5;
  }

  drawPaddle() {
    rect(this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= this.dir;
  }

  moveRight() {
    this.x += this.dir;
  } 

  checkWall() {
    if(this.x<0 || this.x>width-this.width) {
      this.dir = -this.dir;
    }
  }
}