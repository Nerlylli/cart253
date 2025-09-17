/**
 * Introducing Variables
 * Nerly Cadet
 * 
 * Learning what a variable is and does
 */

"use strict";

/**
 * Create a vanvas
*/
function setup() {
    createCanvas(640, 480);
}

/**
 * Draws a circle in the centre of the canvas
*/
function draw() {
    background(0);

    //draw the circle
    push();
    fill(mouseX, mouseY, 0);
    noStroke()
    ellipse(width / 2, height / 2, mouseX, mouseY);
    pop();

}