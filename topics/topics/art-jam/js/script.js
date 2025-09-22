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
    background('white');

    // Making a head
    //1. Circle
    push();
    noStroke();
    fill(120, 67, 10);
    ellipse(370, 250, 400);
    pop();

    //2. Jaw
    push();
    //Rotate the jaw
    rotate(75);
    fill(120, 67, 10);
    noStroke();
    rect(15, 387, 200, 150);
    pop();

    //3. Neck
    push();
    //Rotate the neck
    rotate(50);
    fill(120, 67, 10);
    noStroke();
    rect(175, 495, 100, 200);
    pop();

    // Adding the face features
    //4. Eyebrows
    push();
    fill(28, 17, 6);
    noStroke();
    rect(185, 232, 75, 20);
    pop();

    //5. Eye
    push();
    triangle(220, 310, 220, 350, 280, 310);
    pop();

    //6. Pupil
    push();
    fill(66, 34, 1);
    ellipse(224, 329, 10, 35);
    pop();

    //Adding accessories
    //7. Headphones

    /*Headband*/
    push();
    fill(255, 207, 248);
    noStroke();
    rect(360, 40, 50, 189);
    pop();

    /*Headphone unit*/
    push();
    fill(255, 207, 248);
    stroke(252, 167, 240);
    strokeWeight(5);
    ellipse(385, 300, 150);
    pop();
};


