# Topics covered in class
* Classes and Objects

## Arrays
  * Why do we use arrays?
    * To deal with a collection of values in code
  * Array syntax
    * let a = [];
    * As always, make sure to give understandable variable names. For arrays, its helpful to name the variable in plural    
    * In most languages, the array has to have a collection of similar items (all numbers, strings etc.) - not in Javascript. BUT, a best practice is to always have similar items.
    * Array indexing starts at 0. Meaning the first element in an array is considered to be in the 0th position. the 2nd is 1st position. This "position" is also known as "index"
    * Given an array `a`, you can access the first element in the array by saying `a[0]`, the next one as `a[1]` and so on
    * An arrays lenght -> the number of items/ elements it has can be found with `a.length`
    * Given that the index of an array goes from 0 to `a.length-1`
  * **PRACTICE**  : Let's make an array containing 5 numbers in setup, and print all the numbers inside it. Can you do it with a for loop?
  * **TODO** : Let's go back to the car code, and add more cars with more positions

**🔹💻[In Class Code](https://editor.p5js.org/itp42/sketches/w2tv9CZIB)**

## Objects
  * What is an object?
    * It is an entity, with properties (attributes or functions)
    * Eg - let's take the car - it has a startingX, startingY, a colour, a size etc.
    * **DEMO** Make a car object
    * Now you could even define how this object is drawn as well
    * But we still have the issue that if we need to make multiple car objects, we have to do this each time!
    * So we will çreate a class <- a blueprint of how to make a car!

## Classes and Objects
  * **TODO** Let's create a car class!
  * Create a new object using the car class
  * Make an array of cars!

**🔹💻[In Class Code - 1 - Objects](https://editor.p5js.org/itp42/sketches/BHx99EDVz)**

**🔹💻[In Class Code - 1 - Objects | Arrays](https://editor.p5js.org/itp42/sketches/aDRvuABPM)**

**🔹💻[In Class Code - 1 - Objects | Arrays | MousePressed](https://editor.p5js.org/itp42/sketches/1FD-dKWxg)**

## TRY THIS
* Create a class "Flower"
* Flower should have the following functions
  * draw
  * sway
  * grow (BONUS)
* Your sketch should be able to do the following
  * Create a flower at mouseX and mouseY when you click the mouse on the canvas
  * If user drags the mouse across the canvas, all the flowers should sway ( you can implement the sway functionality either using random or noise
  * BONUS : Only the flowers close to the mouse sway when you drag the mouse
  * BONUS : The flower grows over time