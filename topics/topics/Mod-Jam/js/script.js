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
"use strict"
let rainbow;

let showInstructions = false;

function drawCrown(x, y, size) {
    push();
    translate(x, y);
    noStroke();
    fill(255, 215, 0); // Gold
    rect(-20, 0, 40, 13);
    // Triangles for the top of the crown
    triangle(-20, 0, -13, -20, -7, 0);
    triangle(-7, 0, 0, -20, 7, 0);
    triangle(7, 0, 13, -20, 20, 0);
    //Dots on the crowns
    fill(255, 0, 150);
    ellipse(-13, -20, 5);
    ellipse(0, -20, 5);
    ellipse(13, -20, 5);
    pop();
}

let gameStarted = false;
let believeQuestion = true; // true = show the question screen first

/*Creates the canvas*/
function setup() {
    createCanvas(640, 480);

    //Give the fly its first random position
    resetFly();
}

// Our Unicorn
const unicorn = {
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    horn: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        state: "idle"
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Moves the unicorn to the mouse position on x
 */
function moveUnicorn() {
    unicorn.body.x = mouseX;
}

/**
 * Handles moving the horn based on its state
 */
function moveHorn() {
    // horn matches the unicorn's x
    unicorn.horn.x = unicorn.body.x;
    // If the horn is idle, it doesn't do anything
    if (unicorn.horn.state === "idle") {
        // Do nothing
    }
    // If the horn is outbound, it moves up
    else if (unicorn.horn.state === "outbound") {
        unicorn.horn.y += -unicorn.horn.speed;
        // The horn bounces back if it hits the top
        if (unicorn.horn.y <= 0) {
            unicorn.horn.state = "inbound";
        }
    }
    // If the horn is inbound, it moves down
    else if (unicorn.horn.state === "inbound") {
        unicorn.horn.y += unicorn.horn.speed;
        // The horn stops if it hits the bottom
        if (unicorn.horn.y >= height) {
            unicorn.horn.state = "idle";
        }
    }
}

/**
 * Displays the horn (tip and line connection) and the unicorn (body)
 */
function drawUnicorn() {

    // Draw the unicorn's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(unicorn.body.x, unicorn.body.y, unicorn.body.size);
    pop();

    // Draw the rest of the horn
    push();
    stroke("#FF00C4");
    strokeWeight(unicorn.horn.size);
    line(unicorn.horn.x, unicorn.horn.y, unicorn.body.x, unicorn.body.y);
    pop();
}

/**
 * Handles the horn overlapping the fly
 */
function checkHornFlyOverlap() {
    // Get distance from horn to fly
    const d = dist(unicorn.horn.x, unicorn.horn.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < unicorn.horn.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the horn
        unicorn.horn.state = "inbound";
    }
}


function mousePressed() {
    if (unicorn.horn.state === "idle" && gameStarted) {
        unicorn.horn.state = "outbound";
    }

    /*Buttons before the game starts*/
    //YES button
    if (believeQuestion) {
        if (mouseX > 200 && mouseX < 300 && mouseY > 260 && mouseY < 310) {
            believeQuestion = false;
            showInstructions = true;
        }
        //NO button
        else if (mouseX > 340 && mouseX < 440 && mouseY > 260 && mouseY < 310) {
            believeQuestion = false;
            gameStarted = false;
        }
    }
    //Instructions button
    else if (showInstructions) {
        if (mouseX > 270 && mouseX < 370 && mouseY > 400 && mouseY < 450) {
            showInstructions = false;
            gameStarted = true;
        }
    }
}

/*Draws the scenery*/
function draw() {
    background(47, 203, 255);

    //Start screen 
    if (believeQuestion) {
        textAlign(CENTER, CENTER);
        textSize(32);
        fill(255);
        text("Do you believe in unicorns?", width / 2, height / 2 - 40);

        // YES button 
        fill("#6aff6a");
        rect(200, 260, 100, 50, 10);
        let glow = abs(sin(frameCount * 0.1)) * 255; // glow effect 

        push();
        textAlign(CENTER, CENTER);
        textSize(24);
        stroke(255, 255, 255, glow); // white glowing outline
        strokeWeight(5);
        fill(0);
        text("YES", 250, 285);
        pop();

        // NO button
        push();
        fill(255, 179, 186);
        rect(340, 260, 100, 50, 10);
        fill(0);
        textSize(24);
        text("NO", 390, 285);
        pop();

        return;
    }

    // Instructions screen
    if (showInstructions) {
        textAlign(CENTER, CENTER);
        textSize(28);
        fill(229, 202, 255);
        let glow = abs(sin(frameCount * 0.1)) * 255; stroke(glow); //same glow as "yes"
        strokeWeight(2);
        text("Wow! A believer!",
            width / 2,
            height / 2 - 50);
        textSize(20);
        noStroke();
        text("Your mission is\n" +
            "to protect the palace from\n" +
            "all the flies that are infesting\n" +
            "the area!",
            width / 2,
            height / 1.8);
        fill("#6aff6a");
        stroke(0);
        rect(270, 400, 100, 50, 10);
        fill(0);
        textSize(24);
        text("OK", 320, 425);

        return;
    }
    //If they said NO — Games crashes
    if (!gameStarted) {
        let pulse = sin(frameCount * 0.1) * 20 + 60;
        textSize(30);
        textAlign(CENTER, CENTER);
        fill(random(200, 255), random(0, 100), random(0, 255));
        background(random(40, 60), random(180, 220), random(255));

        for (let i = 0; i < 40; i++) {
            text("Shun the non-believers!", random(width), random(height));
        }
        return;
    }

    /*Add a rainbow in the back
    push();
    textSize(500);
    rotate(190);
    text("🌈", 200, -200);
    pop();*/

    //Draw the rainbow gif
    push();
    rotate(190);
    image(rainbow, -50, -400);
    pop();


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

    moveFly();
    drawFly();
    moveUnicorn();
    moveHorn();
    drawUnicorn();
    checkHornFlyOverlap();

    /*Inspired by P5 "Get Started" Tutorial by Layla Quiñones and Jaleesa Trapp*/
    //emojis
    textSize(25)
    //Flower emojis to be diversified - different flowers
    text("🌸", 100, 450); //flower
    text("🌸", 200, 450); //flower
    text("🌸", 300, 450); //flower
    text("🌸", 400, 450); //flower
    text("🌸", 500, 450); //flower
    text("🌸", 600, 450); //flower
    textSize(50)
    text("🦄", mouseX, mouseY); //Will replace the frog

    //Drawing the crowns on the bottom right of the canvas
    drawCrown(480, 450, 40);
    drawCrown(540, 450, 40);
    drawCrown(600, 450, 40);

}

function preload() {
    rainbow = loadImage("assets/images/rainbow.gif");
}