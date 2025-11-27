/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";

let state = "menu";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(640, 480);
}


/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "easy-variation":
            easyDraw();
            break
        case "medium-variation":
            greenDraw();
            break;
        case "hard-variation":
            blueDraw();
            break;
    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "menu":
            menuMousePressed();
            break;
        case "easy-variation":
            easyMousePressed();
            break
        case "medium-variation":
            greenMousePressed();
            break;
        case "hard-variation":
            blueMousePressed();
            break;
    }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
        case "easy-variation":
            easyKeyPressed(event);
            break
        case "medium-variation":
            greenKeyPressed(event);
            break;
        case "hard-variation":
            blueKeyPressed(event);
            break;
    }
}