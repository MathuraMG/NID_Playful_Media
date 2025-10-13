// this is only a blueprint!! This object does not exist

class Car {
  constructor(x,y,size,speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  show() {
    rect(this.x, this.y, this.size, 20);
    ellipse(this.x+10,this.y+20,10);
    ellipse(this.x+this.size-10,this.y+20,10);
  }

  move() {
    this.x = this.x+this.speed;
    if(this.x>width) {
      this.x = 0;
    }
  }
}