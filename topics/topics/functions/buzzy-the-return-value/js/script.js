/**
 * Buzzy the return value
 * Pippin Barr
 * 
 * Two flies that buzz around on the canvas
 */

"use strict";

// Our flies that will buzz around
let buzzyTheFly = undefined;
let jazzyTheFly = undefined;
let jaccuzziTheFly = undefined;

/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);

    buzzyTheFly = createFly(10);
    jazzyTheFly = createFly(2);
    jaccuzziTheFly = createFly(5);
}

function createFly(flyBuzziness) {
    let fly = {
        x: random(100, width - 100), //Dynamic 
        y: random(100, height - 100), //Dynamic 
        size: 20,  //Default 
        buzziness: flyBuzziness //Parameter 
    };

    return fly
};

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);
    moveFly(jaccuzziTheFly);

    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
    drawFly(jaccuzziTheFly);
}

/**
 * Move the fly passed in by updating its position
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in using its properties
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}