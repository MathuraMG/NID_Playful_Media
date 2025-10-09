# Recap topics
* Nested for loops
* Let's make a gen pattern with some rectangles
  
# Topics to cover
* Transformations
* Images
* Map function

# Transformations
* push, pop
* translate
* rotate
* let's draw a simple flower to start off
* TODO : Make a rotational symmetry drawing app
* Move this into a generative pattern grid

Currently when we work on p5 canvas, the assumption is that the origin is on the top left and the canvas is at a zero degree angle. These are considered the current state of your canvas. However these can be changed.
  
# Images - Part 1
* How do we add images
  
## Working with images in p5
* If we are using a local file, ensure it is in your project folder. Best practice is to put images/ fonts/ sounds in its own folder. You can create a folder called assets and put it in there
* Once uploaded, you will have to load the image into p5 and store it in a variable. Remember to do this in the ‘preload’ function
* After that you can use the (image)[https://p5js.org/reference/p5/image/] function to display the image


# Arrays
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
  * **TODO** : Let's go back to gen pattern. Have an array of 5 colours and randomly select one from the array for each block

**🔹💻[Extra example code](https://editor.p5js.org/itp42/sketches/w2tv9CZIB)**

# Images - Part 2
* Using sprites!!
  
## Get function in image
* You can use the get function in 2 ways. If you give it ONLY x and y values, it gives you the rgb value for that single pixel.
* If you give it 4 values - x, y, width, height - it will give you the pixel values of that part of the image. Meaning, you can display it as an image!
* Note: You can display a part of the image using the (image)[https://p5js.org/reference/p5/image/] function, but an easier way to do it would be using the (image.get)[https://p5js.org/reference/p5.Image/get/] function

## Sprites
* A spritesheet has various parts of a charecter animation linearly layed out.
* We can use img.get to break them up into smaller images and the store them in an array
* We can then loop through the array and display the images sequentially to create the illusion of movement
* PS - This is going to be very helpful when you are working with games.
  
🔴💻[Example - working with a spritesheet which has one animation](https://editor.p5js.org/itp42/sketches/jrDRcf2XN)

🔴💻[Example - working with a spritesheet which has multiple animations](https://editor.p5js.org/itp42/sketches/oO0Rt5_cJ)

# Assgns
* finish day 1, 2, 3
* Create a gen pattern with images and ARRAYS!!!
* Practice arrays -create a gen pattern with rectangles. Create an array of colors (using hex values). Each rectangle will use a colour from that array via a random choice.