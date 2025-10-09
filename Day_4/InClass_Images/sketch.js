let size = 20, g0,g1,g2,g3;

function preload() {
  g0 = loadImage("images/g0.png");
  g1 = loadImage("images/g1.png");
  g2 = loadImage("images/g2.png");
  g3 = loadImage("images/g3.png");
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(2);
}

function draw() {
  background(220);

  // nested for loop
  for(let i=0;i<width;i=i+size) {
    for(let j=0;j<height;j=j+size) {

      //select 1 of 4 choices
      let choice = floor(random(0,4));
      if(choice==0) {
        image(g0,i,j,size,size);
      } else if(choice==1) {
        image(g1, i,j,size,size);
      } else if(choice==2) {
        image(g2, i,j,size,size);
      } else {
        image(g3, i,j,size,size);
      } 
      


    }
  }


}
