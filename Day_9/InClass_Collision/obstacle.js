class Obstacle{
  constructor(x, y, width, height) {
    this.x = x; 
    this.y = y;
    this.width = width;
    this.height = height;
    this.active = true;
    this.hitCount =0;
  }

  show() {
    if(this.hitCount < 3) {
      fill("red");
      rect(this.x, this.y, this.width, this.height);
    } else {
      this.active = false;
    }
   
  }

}