class Flower {
  constructor(x,y,xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = 50;
    this.selected = false;
  }
  drawFlower() {
    // ellipse(this.x, this.y, 20,50);
    // ellipse(this.x, this.y, 50,20);
    if(this.selected==true) {
      fill("red");
    } else {
      fill("white");
    }
    ellipse(this.x, this.y, this.size);
  }
  moveFlower() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.y>height || this.y<0) {
      this.ySpeed = -this.ySpeed;
    }
    if(this.x>width || this.x<0) {
      this.xSpeed = -this.xSpeed;
    }
  }
  checkMousePosition(mX, mY) {
    //if mX and mY are close to this.x and this.y, make the flower red, else make it white
    let distance = dist(mX, mY, this.x, this.y);
    if(distance < this.size/2){
      this.selected = true;
    } else {
      this.selected = false;
    }
  }

  checkCollision(otherFlower) {
    let distance = dist(this.x, this.y,otherFlower.x, otherFlower.y);
    if(distance < this.size/2 +otherFlower.size/2) {
      this.xSpeed = -this.xSpeed;
      this.ySpeed = -this.ySpeed;
    }
  }

}