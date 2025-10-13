let myCar;
let myCar1;
let cars = [];
let noCars = 20;

function setup() {
  createCanvas(innerWidth, 400);
  // creating an object from "Car" blueprint/class, storing in "myCar" variable
  // myCar = new Car(20,300,100,20); 
  // myCar1 = new Car(300,300,40,2); 

  for (let i = 0; i < noCars; i += 1) {
    let tempCar = new Car(random(0, width),random(0, height), random(30,80),random(2,10));
    cars.push(tempCar);
    // cars[i] = tempCar
  }

}

function draw() {
  background(220);
  for(let i=0;i<cars.length;i++) {
    cars[i].move();
    cars[i].grow();
    cars[i].show(mouseX/4);
  }
  // myCar.move();
  // myCar.show();
  // myCar1.move();
  // myCar1.show();
}
