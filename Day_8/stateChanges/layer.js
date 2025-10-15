class Layer {
  constructor(bgImg, x, y, index) {
    this.bgImg = bgImg;
    this.x = x;
    this.y = y;
    this.index = index;
    this.width = 100;
    this.speed = 10;
  }
  showLayer() {
    // this.bgImg.resize(this.width,0);
    image(this.bgImg, this.x, this.y, this.width, this.width/2);
  }

  grow() {
    // this.width will increase
    this.width +=this.speed;
    if(this.width > width || this.width<100) {
      this.speed = -this.speed;
    } 
 
  }


}