let size = 20;
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10);
}

function draw() {
  background(220);
  //creates multiple rows
  for (let j = 0; j < height; j = j + size) {
    //creates a row of circles
    for (let i = 0; i < width; i = i + size) {
      let choice = random(0,1);
      if(choice<0.5) {
        line(i,j,i+size,j+size)
      } else {
        line(i+size,j,i,j+size)
      }
      
    }
  }

}

// i=i+1 ---> i+=1
