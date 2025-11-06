/**
 * Loops Challenge
 * YaXuan, Ashmitha, Nerly 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = height;
    let strokeColor = 0;
    let thickness = 1;

    while (x1 <= width) {
        stroke(strokeColor);
        strokeWeight(thickness);
        line(x1, y1, x2, y2);

        x1 += 50;
        x2 += 50;
        strokeColor += 10;
        thickness += 3;
    }

    let x1h = 0;
    let x2h = width;
    let y1h = 0;
    let y2h = 0;
    let strokeColor2 = 220;
    let thickness2 = 10;

    while (y1h <= height) {
        stroke(strokeColor);
        strokeWeight(thickness2);
        line(x1h, y1h, x2h, y2h);

        y1h += 50;
        y2h += 50;
        strokeColor2 -= 30;
        thickness2 += 3;
    }
}