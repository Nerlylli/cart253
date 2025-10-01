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
    //Circle
    push();
    noStroke();
    fill(120, 67, 10);
    ellipse(370, 250, 400);
    pop();

    //Jaw
    push();
    //Rotate the jaw
    rotate(75);
    fill(120, 67, 10);
    noStroke();
    rect(15, 387, 200, 150);
    pop();

    //Neck
    push();
    //Rotate the neck
    rotate(50);
    fill(120, 67, 10);
    noStroke();
    rect(175, 495, 100, 200);
    pop();

    // Adding the face features
    //Eyebrows
    push();
    fill(28, 17, 6);
    noStroke();
    rect(185, 232, 75, 20);
    pop();

    //Eye
    push();
    triangle(220, 310, 220, 350, 280, 310);
    pop();

    //Pupil
    push();
    fill(66, 34, 1);
    ellipse(224, 329, 10, 35);
    pop();

    /*7. Lips... to figure out
    push();
    pop();*/

    //Body
    push();
    fill(0);
    noStroke();
    ellipse(400, 700, 350, 275)
    pop();

    //8. Hair
    /*Strands*/
    push();
    fill(187, 38, 78)
    noStroke();
    rect(360, 220, 210, 450);
    pop();
    /*Bangs*/
    push();
    fill(187, 38, 78)
    noStroke();
    arc(370, 223, 400, 345, 154, 0);
    pop();

    /*Pieces of hair*/
    // Style the lines in the strands of hair
    push();
    stroke(165, 32, 109);
    strokeWeight(5);
    line(370, 200, 370, 650);
    pop();

    push();
    stroke(165, 32, 109);
    strokeWeight(5);
    line(390, 200, 390, 650);
    pop();

    push();
    stroke(165, 32, 109);
    strokeWeight(5);
    line(410, 200, 410, 650);
    pop();

    push();
    stroke(165, 32, 109);
    strokeWeight(5);
    line(430, 200, 430, 650);
    pop();

    push();
    stroke(165, 32, 109);
    strokeWeight(5);
    line(450, 200, 450, 650);
    pop();

    push();
    stroke(165, 32, 109);
    strokeWeight(5);
    line(470, 200, 470, 650);
    pop();

    push();
    stroke(165, 32, 109);
    strokeWeight(5);
    line(490, 200, 490, 650);
    pop();

    push();
    stroke(165, 32, 109);
    strokeWeight(5);
    line(510, 200, 510, 650);
    pop();

    push();
    stroke(165, 32, 109);
    strokeWeight(5);
    line(530, 200, 530, 650);
    pop();

    push();
    stroke(165, 32, 109);
    strokeWeight(5);
    line(550, 200, 550, 650);
    pop();

    //Adding accessories
    //Headphones
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

    //Unicorn horn
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

    //Music note #1
    push();
    fill('#000');
    noStroke();
    ellipse(595 + random(2, 0), 200, 35 + random(2, 0), 15 + random(2, 0));
    pop();

    push();
    fill('#000');
    noStroke();
    ellipse(645 + random(2, 0), 200, 35 + random(2, 0), 15 + random(2, 0));
    pop();

    push();
    fill('#000');
    noStroke();
    rect(600 + random(2, 0), 150, 10, 55);
    pop();

    push();
    fill('#000');
    noStroke();
    rect(650 + random(2, 0), 150, 10, 55);
    pop();

    push();
    fill('#000');
    noStroke();
    rect(600 + random(2, 0), 150, 55, 10);
    pop();

    //Music note #2
    push();
    fill('#000');
    noStroke();
    rect(120 + random(2, 0), 70, 10, 55);
    pop();

    push();
    fill('#000');
    noStroke();
    ellipse(120, 121, 23 + random(2, 0), 15 + random(2, 0));
    pop();

    //Music note #3
    push();
    rotate(50);
    fill('#000');
    noStroke();
    rect(425 + random(2, 0), 602, 10, 55);
    pop();

    push();
    rotate(50);
    fill('#000');
    noStroke();
    ellipse(425, 654, 23 + random(2, 0), 15 + random(2, 0));
    pop();

    //Music notes #4
    push();
    fill('#000');
    noStroke();
    ellipse(150, 550, 35 + random(2, 0), 15 + random(2, 0));
    pop();

    push();
    fill('#000');
    noStroke();
    ellipse(200, 550, 35 + random(2, 0), 15 + random(2, 0));
    pop();

    push();
    fill('#000');
    noStroke();
    rect(155 + random(2, 0), 500, 10, 55);
    pop();

    push();
    fill('#000');
    noStroke();
    rect(205 + random(2, 0), 500, 10, 55);
    pop();

    push();
    fill('#000');
    noStroke();
    rect(155 + random(2, 0), 500, 55, 10);
    pop();


    //Conditionals & MouseX, MouseY; to put the headphones on - so the music notes moves

    //Variables; for the music notes to move
    /*make musicnote1 move*/

}

//11, 0, 16, 14 transparent color fill