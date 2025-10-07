# Day 2 - 7th Oct 2025
## Class Plan

* Github and markdown 
  * [Github for documentation](https://github.com/MathuraMG/Resources/blob/main/Github-for-documentation.md)
  * [Markdown](https://markdown-it.github.io/)
  * [More markdown resources](https://github.com/MathuraMG/Resources/tree/main)

# What is this class about?
* DISCUSSION | How has animation and interaction changed the nature of games and art?
  
* Github recap
  * how to publish your repo
  * Documentation and markdown

* Animation and variables
  * inbuilt and custom variables
  * animation with events and event function
  * key and mouse interactions
  * if statement

## Variables
* What is a variable?
  * A variable contains values that are subject to change
  * We can create variables of our own, but first lets take a look at variables given to us by p5. These are refered to as inbuild variables.
  * `mouseX` and `mouseY` contain the values of the x position and y position of the mouse respectively.
  🔴 In class Demo - draw with p5

* More inbuilt Varibles
  * `width`, and `height` contain the width and the height of the canvas
  * `frameCount` keeps a tab of how many frames have run in the sketch. It can be used for some interesting animation.

* Custom variables
  * In many cases we will want to create out own variables to store values. The syntax to do that is `let variableName = InitialValue;`
  * Creating a variable using `let variableName` is also known as declaring a variable. If you chose to give it a value WHEN declaring, that is known as initilising.
  * Note: You may see some videos/references that use `var` instead of `let`. That is the older way of doing it.
  * If you declare a variable outside of setup and draw, it is known as a global variable, it can be accessed anywhere
  * If you declare it inside one of these functions, it can be used only within that function
  * Why do we need variables?
    * reusability 
    * changing the values

* Interaction and animation in p5
  * You can use the variables to create some simple animations.
 🔴 In class Demo - making an ellipse move across the canvas

* Additional examples
  * [Change emoji colour and shape with mouse movement](https://editor.p5js.org/itp42/sketches/DPKwQyIK0)
  * [Interactive Mondrian composition](https://editor.p5js.org/itp42/sketches/P4cRwLPYl)
  * [Animation with arcs](https://editor.p5js.org/itp42/sketches/HKWOhem2H)

# Functions in p5js
* Existing functions
  * Functions refer to blocks of code. They have a certain task to do.
  * We have been using function in p5 since we started - such as `ellipse`, `fill` etc. You'll notice that when we used these functions, they already knew what to do - i.e draw an ellipse, or fill a certain colour. All we had to do was tell it the size of the ellipse, or the colour to be filled. But if you look at the function `setup`, and `draw` - we were actually telling the computer what has to happen in those functions.
  * So - there are 2 main parts of using functions
    * Defining the function - setting up its name and telling it what happens inside
    * Calling the funciton - actually using it.
  * In the case of `ellipse`, the p5 library has already defined it. We are just calling it. The information that we pass into it are known as *arguments*. During function definition, we let the function know to expect these inputs.
  * In the case of `setup`, we are defining what happens in the function, and the p5 library is calling it as needed
  * We also have other functions that p5 makes available, such as `mousePressed`, `mouseDragged` etc
* Defining our own functions
  * Syntax
  * Below function draws a set of concentric ellipses at arg1, arg2
  ```
  function functionName(arg1, arg2) {
    ellipse(arg1, arg2,10,10);
    ellipse(arg1, arg2,10,10);
    ellipse(arg1, arg2,10,10);
  }
  ```


# ASSIGNMENT
Add interaction to your work from yesterday. Your animation should indicate a shift from one emotion to another