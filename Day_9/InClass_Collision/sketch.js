let ob, player;

function setup() {
  createCanvas(400, 400);
  player = new Player(20,200,40,40);
  ob = new Obstacle(200,200,40,40);
}

function draw() {
  background(220);
  
  
  if(keyIsDown(RIGHT_ARROW)){
    player.moveRight()
  }
  player.checkCollision(ob);
  player.show();
  
  
  ob.show();
 
}
