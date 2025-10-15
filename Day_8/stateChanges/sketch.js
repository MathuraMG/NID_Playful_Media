let noLayers = 3;
let layerImages = [];
let layers = [];

//game states
let currentLayer = 0;
let mouseClicks = 0;
let isGameOver = false;


function preload() {
  for (let i = 0; i < noLayers; i++) {
    let imgName = "images/" + i + ".jpeg";
    layerImages[i] = loadImage(imgName);
  }


}

function setup() {
  createCanvas(innerWidth, innerWidth / 2);
  imageMode(CENTER)
  console.log(layerImages);
  // console.log("innerWidth: ", innerWidth);
  // console.log("width: ", width);
  // console.log("outerWidth: ", outerWidth);

  //create the objects
  for (let i = 0; i < noLayers; i++) {
    let tempLayer = new Layer(layerImages[i], width / 2, height / 2, i);
    layers[i] = tempLayer; //same as layers.push(tempLayer)
  }
}

function draw() {
  background(220);


  // while the game is still running
  if(isGameOver==false) {
    layers[currentLayer].grow();
    layers[currentLayer].showLayer();
    showScore();
  } else { // if game is over
    gameOver();
  }
}

function mousePressed() {
  //if the mouse is clicked 3 times, switch to the next level

  mouseClicks++;
  console.log(mouseClicks);
  if (mouseClicks == 3  && currentLayer < (noLayers-1)) {
    currentLayer++;
    mouseClicks = 0;
  } else if(mouseClicks==3 && currentLayer == (noLayers-1)) {
    isGameOver = true;
  }
  // after the last level - show a message - "game over"

}

function showScore() {
  fill(0);
  rect(0,0,80,20);
  fill(255);
  textSize(10);
  text(" SCORE : " + currentLayer, 10,10 );
}

function gameOver() {
  console.log("game over");
  fill(0);
  rect(0,0,width,height);
  fill(255);
  textSize(50);
  text("GAME OVER",200,200);
 
}
