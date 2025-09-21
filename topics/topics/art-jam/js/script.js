/**
 * Art Jam
 * Nerly Cadet
 * 
 * Going to make a person that looks like a star 
 */

"use strict";

/**
 * Create Canvas
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * Drawing a human-shaped star
*/
function draw() {
    // Pink pastel background
    background(255, 207, 248);

    // Trying to make a head
    push();
    fill('white');
    noStroke();
    ellipse(320, 320, 150);
    pop();

    push();
    fill('white');
    noStroke();
    ellipse(340, 380, 75, 55);
    pop();


}