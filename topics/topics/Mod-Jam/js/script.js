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

    //Give the fly its first random position
    resetFly();
}

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
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
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
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

    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();

}