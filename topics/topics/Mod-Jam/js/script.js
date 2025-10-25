/**
 * Mod Jam
 * Nerly Cadet
 * 
 * A game of catching flies with the unicorn's horn
 * 
 * Instructions:
 * - Move the unicorn with your mouse
 * - Click to launch the power of the horn
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */


/*Creates the canvas*/
function setup() {
    createCanvas(640, 480);
}

/*Draws the scenery*/
function draw() {
    background(47, 203, 255);


    /**
    *Mountain in the back
    *Put on top to be behind the castle
    */
    push();
    noStroke();
    fill('green');
    ellipse(750, 500, 600, 1000);
    pop();

    /**
    *Castle
    */

    /*The bases of the castle*/
    //Last base
    push();
    stroke(255, 147, 172);
    fill(255, 194, 205);
    rect(370, 185, 250, 120);
    pop();
    //Third base
    push();
    stroke(255, 147, 172);
    fill(255, 194, 205);
    rect(465, 135, 100, 50);
    pop();
    //Second base
    push();
    stroke(255, 147, 172);
    fill(255, 194, 205);
    rect(440, 95, 150, 40);
    pop();
    //First base
    push();
    stroke(255, 147, 172);
    fill(255, 194, 205);
    rect(480, 25, 65, 70);
    pop();
    //Tower, left
    push();
    stroke(255, 147, 172);
    fill(255, 194, 205);
    rect(370, 125, 50, 180);
    pop();
    //Tower, right
    push();
    stroke(255, 147, 172);
    fill(255, 194, 205);
    rect(620, 125, 50, 180);
    pop();

    /**
    The windows of the castle
    */

    /*Left Tower*/
    //1st 
    push();
    stroke(255, 98, 137);
    fill(255, 237, 179);
    rect(387, 160, 15, 30);
    pop();
    //2nd
    push();
    stroke(255, 98, 137);
    fill(225, 237, 240);
    rect(387, 250, 15, 30);
    pop();

    /*Last base*/
    //1st
    push();
    stroke(255, 98, 137);
    fill(225, 237, 240);
    rect(450, 220, 15, 40);
    pop();
    //2nd
    push();
    stroke(255, 98, 137);
    fill(255, 237, 179);
    rect(510, 220, 15, 40);
    pop();
    //3rd
    push();
    stroke(255, 98, 137);
    fill(225, 237, 240);
    rect(570, 220, 15, 40);
    pop();

    /*Right Tower*/
    //1st
    push();
    stroke(255, 98, 137);
    fill(225, 237, 240);
    rect(635, 160, 15, 30);
    pop();
    //2nd
    push();
    stroke(255, 98, 137);
    fill(225, 237, 240);
    rect(635, 250, 15, 30);
    pop();

    /*Third base*/
    //1st 
    push();
    stroke(255, 98, 137);
    fill(225, 237, 240);
    rect(480, 155, 15, 30);
    pop();
    //2nd
    push();
    stroke(255, 98, 137);
    fill(225, 237, 240);
    rect(535, 155, 15, 30);
    pop();

    //First base window
    push();
    stroke(255, 98, 137);
    fill(255, 237, 179);
    rect(505, 40, 15, 40);
    pop();

    /**
    *Roof
    */

    //Left tower
    push();
    stroke(255, 98, 137);
    fill(255, 147, 172);
    triangle(367, 130, 395, 75, 423, 130);
    pop();
    //Right tower
    push();
    stroke(255, 98, 137);
    fill(255, 147, 172);
    triangle(617, 130, 645, 75, 673, 130);
    pop();
    //First base
    push();
    stroke(255, 98, 137);
    fill(255, 147, 172);
    triangle(470, 30, 513, -15, 555, 30);
    pop();

    /*Mountains*/
    //Far Right
    push();
    noStroke();
    fill(35, 144, 79);
    ellipse(600, 500, 730, 450);
    pop();
    //Middle
    push();
    noStroke();
    fill(71, 218, 116);
    ellipse(290, 455, 450, 370);
    pop();
    //In-between middle and far right
    push();
    noStroke();
    fill(30, 196, 100);
    ellipse(650, 560, 600, 370);
    pop();
    //Far Left
    push();
    noStroke();
    fill(35, 144, 79);
    ellipse(30, 510, 450, 350);
    pop();

}