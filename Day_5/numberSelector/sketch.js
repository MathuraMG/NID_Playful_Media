let balls = [];
let noBalls = 18;
let startSize = 60;
function setup() {
  createCanvas(innerWidth, innerHeight);

  //make sure to create the new ball in a place which is empty
    
  for(let i =0;i<noBalls;i++) {
    let newX , newY, distance, flag=0;
    do {
      newX = random(0,width);
      newY = random(0,height);
      flag = 0;
      for(let j = 0;j<i;j++) {
        distance = dist(newX, newY, balls[j].x,balls[j].y);
        if(distance<balls[j].size/2+startSize/2) {
          flag = 1;
        }
        print(i, j, distance, balls[j].size);
      }
    } while(flag==1)
    balls[i] = new Ball(newX, newY,i,startSize);
  }
}

function draw() {
  background(20);

  
  for(let i =0;i<noBalls;i++) {
    balls[i].grow();
    for(let j = 0;j<noBalls;j++) {
      if(i!=j) {
        balls[i].collision(balls[j]);
      }
    }
    
    balls[i].move();
    balls[i].show();
  }
}

function doubleClicked() {
  let randomStudent = floor(random(0,noBalls));
  print(randomStudent);
  balls[randomStudent].select();
}