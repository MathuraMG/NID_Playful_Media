let colours = ["#FCF9EA", "#BADFDB", "#FFA4A4", "#FFBDBD"];
let size =40;
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(220);
  //draw a grid of squares
  for(let i =0;i<width;i+=size) {
    for(let j =0;j<height;j+=size) {
      //select an index for the array
      let choice = floor(random(0,colours.length));
      //get colour from the index
      fill(colours[choice]);
      rect(i,j,size,size);
    }
  }
}
