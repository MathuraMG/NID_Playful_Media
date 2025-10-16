class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 2;
  }


  show() {
    fill("blue");
    rect(this.x, this.y, this.width, this.height);
  }
  moveRight() {
    this.x += this.speed;
  }

  checkCollision(obst) {
    if (obst.active && (this.x + this.width > obst.x)) {
      console.log("BAM!!");
      this.x = obst.x - this.width - 2;
      obst.hitCount++;
    }
  }

}