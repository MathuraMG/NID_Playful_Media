//create  array - initialise with 3 fruits
let fruits = ["apple", "banana", "coconut", "durian", "e", "fig"];
function setup() {
  createCanvas(400, 400);
  console.log(fruits);
  //find the length of array
  console.log("the lenghts is " +fruits.length);

  // loop thro the array -IMP!!!!!
  for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
  }

  //add to the array
  fruits[fruits.length]="grapes";
  console.log(fruits);
}

function draw() {
  background(220);
}
