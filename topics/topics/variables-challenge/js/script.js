/**
 * Mr. Furious
 * Nerly, Ashmita, YaXuan
 * 
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};

// Our bird
let bird = {
    //Position
    x: 0,
    y: 200,
    //Dimensions
    width: 30,
    height: 20,
    //Fill colour (greyscale)
    fill: {
        r: 245,
        g: 221,
        b: 66,
    },
};

//Shade to fill the sky (background)
let skyShade = {
    r: 160,
    g: 180,
    b: 200,
};


/**
 * Create the canvas
*/
function setup() {
    createCanvas(400, 400);

    //Slow the frame rate
    frameRate(30);
};

/**
 * Draw (and update) Mr. Furious
*/
function draw() {
    // Make day turn to night
    skyShade.r -= 0.5
    skyShade.g -= 0.5
    skyShade.b -= 0.3;
    background(skyShade.r, skyShade.g, skyShade.b);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x + random(-25, 35), mrFurious.y, mrFurious.size);
    pop();

    // Make Mr. Furious turn red over time
    mrFurious.fill.g = mrFurious.fill.g - 0.255;
    mrFurious.fill.b = mrFurious.fill.b - 0.255;

    // Shaking with rage
    //mrFurious.x += random(-45, 55);
    //mrFurious.y += random(-45, 55);

    // Add an annoying bird
    push();
    fill(bird.fill.r, bird.fill.g, bird.fill.b);
    noStroke();
    ellipse(bird.x, bird.y, bird.width, bird.height);
    pop();

    //Make the annoying bird fly
    //The bird goes right
    bird.x += 2
};