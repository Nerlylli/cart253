/**
 * Creating Variables
 * Nerly Cadet
 * 
 * Experimenting with creating variables
 */

"use strict";

let cheeseRed = 255;
let cheeseGreen = 255;
let cheeseBlue = 0;

let holeShade = 0;
let holeSize = 120;
let HoleX = 140;
let HoleY = 175;

/**
 * Create the canvas
*/
function setup() {
    createCanvas(480, 480);
}

/**
 * Draws a hole in a piece of cheese
*/
function draw() {
    //The cheese
    background(cheeseRed, cheeseGreen, cheeseBlue);

    //The hole
    push();
    noStroke();
    fill(holeShade);
    ellipse(HoleX, HoleY, holeSize);
    pop();
}