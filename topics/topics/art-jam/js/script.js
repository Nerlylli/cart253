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
    createCanvas(700, 700);
}


/**
 * Drawing a human-shaped star
*/
function draw() {
    // Pink pastel background
    background(255, 207, 248);

    // Making a head
    //1. Circle
    push();
    noStroke();
    fill('white');
    ellipse(370, 250, 400);
    pop();

    //2. Jaw
    push();
    //Rotate the jaw
    rotate(75);
    noStroke();
    rect(15, 387, 200, 150);
    pop();

    //3. Neck
    push();
    //Rotate the neck
    rotate(50);
    noStroke();
    rect(175, 495, 100, 200);
    pop();

    // Adding the face features
    //4. Ear
    push();
    ellipse(385, 300, 100);
    pop();

    //5. Eyebrow
    push();
    rect(185, 232, 75, 20);
    pop();

    //6. Eye
    push();
    triangle(220, 310, 220, 350, 280, 310);
    pop();

};