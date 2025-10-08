# Recap topics
* Nested for loops
  
# Topics to cover
* Transformations
* Images

# Transformations
* push, pop
* translate
* rotate

Currently when we work on p5 canvas, the assumption is that the origin is on the top left and the canvas is at a zero degree angle. These are considered the current state of your canvas. However these can be changed.


  
# Images
* How do we add images
* Using sprites!!
  
## Working with images in p5
* If we are using a local file, ensure it is in your project folder. Best practice is to put images/ fonts/ sounds in its own folder. You can create a folder called assets and put it in there
* Once uploaded, you will have to load the image into p5 and store it in a variable. Remember to do this in the ‘preload’ function
* After that you can use the (image)[https://p5js.org/reference/p5/image/] function to display the image

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