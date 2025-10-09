class Ball{

  constructor(x,y,no,size) {
    this.x = x;
    this.y = y;
    this.colour = random(120,200);
    this.size = size;
    this.no = no;
    this.xspeed = random(-10,10);
    this.yspeed = random(-10,10);
    this.selected = false;
    
  }
  show() {
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, this.size);
    stroke(0);
    fill(0);
    text(this.no, this.x-5, this.y);
  }

  select() {
    this.selected = true;
  }

  move() {
    

    // check wall bounce condition
    if(this.x+this.size/2>width || this.x<this.size/2) {
      this.xspeed = -this.xspeed;
    }
    if(this.y + this.size/2>height || this.y<this.size/2) {
      this.yspeed = -this.yspeed;
    }

    //move it
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  collision(otherBall) {
    // check bounce condition against all the balls
    let distance = dist(otherBall.x, otherBall.y, this.x, this.y);
    if(distance <= (otherBall.size + this.size)/2) {
      this.xspeed = -this.xspeed;
      this.yspeed = -this.yspeed;
    }
  }

  grow() {
    if(this.size<200 && this.selected) {
      this.size ++;
    }
    
  }
}