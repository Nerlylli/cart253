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

    colorMode(HSB);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background(0);

    //Step 4
    // lines variables for background
    let x1b = 0;
    let x2b = 0;
    let y1b = 0;
    let y2b = height;
    let lineHue = 0;
    let thickness3 = 1;

    // loops for lines in the background
    while (x1b <= width) {
        stroke(lineHue, 100, 100);
        strokeWeight(thickness3);
        line(x1b, y1b, x2b, y2b);

        x1b += 5;
        x2b += 5;
        lineHue = map(x1b, 0, width, 0, 360); // gradient
    }
    //step 2
    // vertical lines variables
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = height;
    let strokeColor = 0;
    let thickness = 1;

    //loops for vertical lines
    while (x1 <= width) {
        stroke(strokeColor);
        strokeWeight(thickness);
        line(x1, y1, x2, y2);

        x1 += 50;
        x2 += 50;
        strokeColor += 10; // color goes from black to white
        thickness += 3; // strokeweight increases
    }
    //step 3
    // horizontal lines variables
    let x1h = 0;
    let x2h = width;
    let y1h = 0;
    let y2h = 0;
    let strokeColor2 = 220;
    let thickness2 = 10;

    // loops for horizontal lines
    while (y1h <= height) {
        stroke(strokeColor2);
        strokeWeight(thickness2);
        line(x1h, y1h, x2h, y2h);

        y1h += 50;
        y2h += 50;
        strokeColor2 -= 30; // color goes from white to black
        thickness2 += 3; // strokeweight increases
    }
}