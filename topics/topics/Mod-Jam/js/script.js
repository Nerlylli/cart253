/**
 * Mod Jam
 * Nerly Cadet
 * 
 * A game of catching flies with the unicorn's horn
 * 
 * Instructions:
 * - Move the unicorn with your mouse
 * - Put the unicorn on top of the fly to eat them (no need to click)
 * - Game goal: Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */
"use strict"
//checks how many deadly flies have been eaten
let score = 0;

let deadEaten = 0;

let rainbow;

let showInstructions = false;

//Flies
let fly1 = undefined;
let fly2 = undefined;
let fly3 = undefined;
let fly4 = undefined;
let fly5 = undefined;

// The unicorn 
const unicorn = {
    x: undefined,
    y: undefined,
    size: 50
};

//Deadly flies
let dead1 = undefined;
let dead2 = undefined;
let dead3 = undefined;

//Extra life fly
let life = undefined;

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

function drawCastle() {
    //The bases
    push();
    stroke(255, 147, 172);
    fill(255, 194, 205);
    rect(370, 185, 250, 120); //Last base
    rect(465, 135, 100, 50); //Third base
    rect(440, 95, 150, 40); //Second base
    rect(480, 25, 65, 70); //First base
    rect(370, 125, 50, 180); //Left tower
    rect(620, 125, 50, 180); //Right tower
    pop();

    //The roofs
    push();
    stroke(255, 98, 137);
    fill(255, 147, 172);
    triangle(367, 130, 395, 75, 423, 130);
    triangle(617, 130, 645, 75, 673, 130);
    triangle(470, 30, 513, -15, 555, 30);
    pop();
}

function drawWindows(x, y, w, h) {
    //Yellow windows = lights on
    push();
    stroke(255, 98, 137);
    fill(255, 237, 179);
    rect(387, 160, 15, 30); // Left tower 1
    rect(505, 40, 15, 40); // Top base window
    rect(510, 220, 15, 40); // Last base 2
    pop();

    //Blue windows = lights off
    push();
    stroke(255, 98, 137);
    fill(225, 237, 240);
    rect(387, 250, 15, 30), // Left tower 2
        rect(450, 220, 15, 40), // Last base 1
        rect(570, 220, 15, 40), // Last base 3
        rect(635, 160, 15, 30), // Right tower 1
        rect(635, 250, 15, 30),// Right tower 2
        rect(480, 155, 15, 30), // Third base 1
        rect(535, 155, 15, 30), // Third base 2
        pop();
}

function drawMountains() {
    noStroke();
    fill(35, 144, 79);
    ellipse(600, 500, 730, 450); //Far Right
    fill(71, 218, 116);
    ellipse(290, 455, 450, 370); //Middle
    fill(30, 196, 100);
    ellipse(650, 560, 600, 370); //In-between middle and far right
    fill(35, 144, 79);
    ellipse(30, 510, 450, 350); //Far Left
}

let gameStarted = false;
let believeQuestion = true; // true = show the question screen first

/*Creates the canvas*/
function setup() {
    createCanvas(640, 480);

    /**
     * The normal flies
     */
    //Create the flies
    fly1 = createFly();
    fly2 = createFly();
    fly3 = createFly();
    fly4 = createFly();
    fly5 = createFly();
    //Give the fly its first random position
    resetFly(fly1);
    resetFly(fly2);
    resetFly(fly3);
    resetFly(fly4);
    resetFly(fly5);

    /**
     * The deadly flies
     */
    //Create the deadly flies
    dead1 = createDead();
    dead2 = createDead();
    dead3 = createDead();
    //Give the deadly fly its first random position
    resetDead(dead1);
    resetDead(dead2);
    resetDead(dead3);

    /**
     * The extra-life fairy
     */
    //Create the extra-life fairy
    life = createLife(life);
    //Give the extra-life fairy its first random position
    resetLife(life);
}

function createFly() {
    let fly = {
        x: 0,
        y: 200, // Will be random
        size: 10,
        speed: random(4, 10)
    };

    return fly;
}

function createDead() {
    let dead = {
        x: 0,
        y: 200, // Will be random
        size: 15,
        speed: random(3, 7)
    }

    return dead;
}

function createLife() {
    let life = {
        x: 0,
        y: 200, // Will be random
        size: 15,
        speed: random(10, 15)
    }

    return life;
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly(fly) {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly(fly);
    }
}

/**
 * Moves the deadly fly according to its speed
 * Resets the deadly fly if it gets all the way to the right
 */
function moveDead(dead) {
    // Move the fly
    dead.x += dead.speed;
    // Handle the fly going off the canvas
    if (dead.x > width) {
        resetDead(dead);
    }
}

/**
 * Moves the extra-life fairy according to its speed
 * Resets the extra-life fairy if it gets all the way to the right
 */
function moveLife(life) {
    // Move the fly
    life.x += life.speed;
    // Handle the fly going off the canvas
    if (life.x > width) {
        resetLife(life);
    }
}

/**
 * Draws the fly as blue circle
 */
function drawFly(fly) {
    push();
    stroke("#2e60a8");
    fill("#4d8ec1");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Draws the deadly fly as a black circle
 */
function drawDead(dead) {
    push();
    noStroke();
    fill("#000000");
    ellipse(dead.x, dead.y, dead.size);
    pop();
}

/**
 * Draws the extra-life fairy as a gold circle
 */
function drawLife(life) {
    textSize(life.size);
    text("🧚🏾", life.x, life.y);
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly(fly) {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Resets the deadly fly to the left with a random y
 */
function resetDead(dead) {
    dead.x = 0;
    dead.y = random(0, 300);
}

/**
 * Resets the extra-life fairy to the left with a random y
 */
function resetLife(life) {
    life.x = 0;
    life.y = random(0, 300);
}

function mousePressed() {

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

function moveUnicorn() {
    unicorn.x = mouseX;
    unicorn.y = mouseY;
}

function drawUnicorn() {
    textSize(unicorn.size);
    textAlign(CENTER, CENTER);
    text("🦄", unicorn.x, unicorn.y);
}

function checkFlyEaten(fly) {
    const d = dist(unicorn.x, unicorn.y, fly.x, fly.y);
    // If unicorn and fly overlap
    if (d < unicorn.size / 2 + fly.size / 2) {
        score += 1; //Gains a point
        resetFly(fly); // fly disappears and respawns
    }
}

function checkDeadEaten(dead) {
    const d = dist(unicorn.x, unicorn.y, dead.x, dead.y);
    // If unicorn and fly overlap
    if (d < unicorn.size / 2 + dead.size / 2) {
        deadEaten += 1;
        resetDead(dead); // deadly fly disappears and respawns
    }
}

function checkLifeEaten(life) {
    const d = dist(unicorn.x, unicorn.y, life.x, life.y);
    // If unicorn and fly overlap
    if (d < unicorn.size / 2 + life.size / 2) {
        if (deadEaten > 0) {
            deadEaten -= 5; //crown reappears
            if (deadEaten < 0) deadEaten = 0; // can't go negative
            resetLife(life); // extra-life fairy disappears and respawns
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

    /**
     * Instructions screen
     */
    //Wow! A believer!
    if (showInstructions) {
        textAlign(CENTER, CENTER);
        textSize(28);
        fill(229, 202, 255);
        let glow = abs(sin(frameCount * 0.1)) * 255; stroke(glow); //same glow as "yes"
        strokeWeight(2);
        text("Wow! A believer!",
            width / 2,
            height / 2 - 150);
        //Mission text
        textSize(20);
        noStroke();
        text("Your mission is to protect the castle\n" +
            "from all the flies that infesting the area.\n" +
            "\n" +
            "Eat as much blue flies are you can, and\n" +
            "avoid the black flies, as they are poisonous.\n" +
            "\n" +
            "Don't worry. Sometimes, little fairies rapidly pass through\n" +
            "the screen in the hopes that you don't see them. Eat\n" +
            "them to regain a little bit of life back. Or don't.\n",
            width / 2,
            height / 1.8);
        //OK button
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

    //Castle
    drawCastle();

    //Castle
    drawWindows();

    //Mountains
    drawMountains();


    /*Inspired by P5 "Get Started" Tutorial by Layla Quiñones and Jaleesa Trapp*/
    /*flowers*/
    //flowers on the middle-right
    textSize(35)

    text("🌼", 630, 360)
    text("🌸", 630, 335);
    text("🌼", 630, 315);
    text("🌸", 630, 290);

    text("🌸", 600, 365);
    text("🌸", 570, 370);
    text("🌼", 540, 375);
    text("🌸", 510, 380);

    text("🌸", 490, 357);
    text("🌸", 445, 310);

    text("🌼", 470, 300);
    text("🌸", 500, 295);
    text("🌸", 530, 290);
    text("🌼", 560, 285);
    text("🌼", 590, 280);
    text("🌸", 620, 275);
    text("🌸", 620, 275);

    text("🌸", 470, 335);
    text("🌼", 500, 335);
    text("🌸", 530, 335);
    text("🌸", 560, 335);
    text("🌼", 590, 335);
    text("🌸", 620, 335);

    text("🌸", 520, 357);
    text("🌼", 550, 357);
    text("🌸", 580, 357);
    text("🌸", 610, 357);

    text("🌸", 445, 310);
    text("🌸", 475, 310);
    text("🌸", 505, 310);
    text("🌼", 535, 310);
    text("🌸", 565, 310);
    text("🌸", 595, 310);
    text("🌸", 625, 310);

    text("🌼", 620, 300);

    //flowers on the bottom-left
    text("🌺", 150, 395);
    text("🌺", 40, 370);
    text("🌺", 40, 450);
    text("🌺", 95, 420);
    text("🌺", 185, 460);

    /**
     * The normal flies
     */
    //Movement of the fly
    moveFly(fly1);
    moveFly(fly2);
    moveFly(fly3);
    moveFly(fly4);
    moveFly(fly5);
    //Drawing the fly
    drawFly(fly1);
    drawFly(fly2);
    drawFly(fly3);
    drawFly(fly4);
    drawFly(fly5);
    //Flies being eaten
    checkFlyEaten(fly1);
    checkFlyEaten(fly2);
    checkFlyEaten(fly3);
    checkFlyEaten(fly4);
    checkFlyEaten(fly5);

    /**
     * The deadly flies
     */
    ///Movement 
    moveDead(dead1);
    moveDead(dead2);
    moveDead(dead3);
    //Drawing 
    drawDead(dead1);
    drawDead(dead2);
    drawDead(dead3);
    //Deadly flies being eaten
    checkDeadEaten(dead1);
    checkDeadEaten(dead2);
    checkDeadEaten(dead3);

    /**
     * The extra-life fairy
     */
    //Movement
    moveLife(life);
    //Drawing
    drawLife(life);
    //Fly being eaten
    checkLifeEaten(life);

    /**
     *  Drawing crowns on the bottom right of the canvas
     * Whenever the player eats 5 deadly flies, one crown disappears
     */
    if (deadEaten < 5) drawCrown(480, 450, 40); // First crown
    if (deadEaten < 10) drawCrown(540, 450, 40); // Second crown
    if (deadEaten < 15) drawCrown(600, 450, 40); // Third crown

    //The Unicorn
    moveUnicorn();
    drawUnicorn();

    //Display score
    push();
    fill(255);
    textSize(100);
    text(score, 300, 350);
    pop();
}

//The rainbow 
function preload() {
    rainbow = loadImage("assets/images/rainbow.gif");
}