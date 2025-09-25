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
    background('blue');

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

    //8. Unicorn horn
    // First base (from bottom to top)
    push();
    beginShape(TRIANGLE_STRIP);
    rotate(100);
    /*purple*/fill(202, 147, 202);
    vertex(130, 240);
    vertex(140, 195);
    vertex(150, 240);

    /*white*/fill(255, 255, 255);
    vertex(160, 195);

    /*purple*/fill(202, 147, 202);
    vertex(170, 240);

    /*white*/fill(255, 255, 255);
    vertex(180, 195);

    /*purple*/fill(202, 147, 202);
    vertex(190, 240);
    endShape();
    pop();

    //Second base
    push();
    beginShape(TRIANGLE_STRIP);
    rotate(100);

    /*blue*/fill(71, 169, 250);
    vertex(140, 195);
    vertex(145, 150);
    vertex(160, 195);

    /*white*/fill(255, 255, 255);
    vertex(170, 150);

    /*blue*/fill(71, 169, 250);
    vertex(180, 195);
    vertex(180, 195);
    endShape();
    pop();

    //Third base
    push();
    beginShape(TRIANGLE_STRIP);
    rotate(100);
    /*pink*/fill(248, 139, 194);
    vertex(145, 150);
    vertex(157.5, 105);
    vertex(170, 150);
    endShape();
    pop();

};

//11, 0, 16, 14 transparent color fill