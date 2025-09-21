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
    fill('transparent');
    noStroke();
    ellipse(220, 250, 150);
    pop();

}