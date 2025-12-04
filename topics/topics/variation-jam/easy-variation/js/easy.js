/**
 * Variation Jam
 * Nerly Cadet
 * 
 * DESCRIPTION OF CODE
 * 
 * WHAT TO ADD
 * When player dies, message with buttons
    *Play again
    *Change Variations
 * 
 * VARATIONS
 * 1. Normal versiom
 * 2. Avoid the "color" snake
 * 3. The "color" snake is following you
 * 
 * HOW TO PLAY
 * 1. Press Play at the top
 * 2. Click on dark grey canvas (before snake hit the wall)
 * 3. Use key arrows to move snake
 */

"use strict";

let scl = 20; //size of snake and food
let score = 0;
let s = new Snake();
let food;
let showInstructions = true;
let gameOver = true;

/**SETS UP THE CANVAS */
function setup() {
    createCanvas(640, 480);
    frameRate(10);
    pickLocation();
}

//function to store snake's location on the grid
//floor calculates the closest int value that is less than or equal to the value of the parameter.
function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));//this ensure the food is in the grid aligned with snake
    food.mult(scl);//to expand it back out
}

/**DRAWS THE BACKGROUND */
function draw() {
    background(153, 1, 72);



    //if snake eat food, pick location
    if (s.eat(food)) {
        pickLocation();
    }
    // s.death();
    s.update();
    s.show();

    //drawing snake food
    push();
    stroke(random(255), random(0, 230), random(43, 234));
    fill(random(255), random(0, 230), random(43, 234));
    rect(food.x, food.y, scl, scl);
    pop();

    drawScore();

    if (showInstructions) {
        drawInstructions();
        return;
    }
}

function drawScore() {
    textSize(20);
    fill(255);
    text("Score\n" + score, 10, 30);
}

/**
 * This will be called whenever a key is pressed while the red variation is active
 */
function keyPressed() {

    //The instructions before the game starts
    if (showInstructions && key === " ") {
        showInstructions = false;
        return;
    }

    switch (keyCode) {
        case 82: // R key
            if (gameOver) { // only restart if the player is dead
                score = 0;
                s = new Snake();
                pickLocation();
                gameOver = false;
                loop(); // resume draw loop
            }
            break;
    }

    if (keyCode === UP_ARROW) {
        s.dir(0, -1); //moves 0 along x and -1 (up) along y axis
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }

}

function restartGame() {
    score = 0;
    s = new Snake();
    pickLocation();
    showInstructions = false;
    loop();  // resume p5 draw loop
}


function drawInstructions() {
    background('pink');

    fill(255, 105, 180);
    textSize(32);
    text("SNAKE GAME", 212, 50);
    text("Level Easy", height / 2, 80);

    fill(255);
    textSize(20);
    text("HOW TO PLAY:", 20, 125);
    text("The goal is to gather 25 other snakes\n" +
        "\n" +
        "Use the ➝ to go right\n" +
        "Use the ← to go left\n" +
        "Use the ↑ to go up, and\n" +
        "Use the ↓ to go down.\n" +
        "\n" +
        "Avoid hitting the corners, because you will lose",
        20, 150);

    fill(255, 105, 180);
    textSize(24);
    text("Press SPACE to start", 200, 400);
}


//function to create snake object, with location and speed
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0; //to track the lenght of snake. If the snakes eat the food, total should go up to 1. total++
    this.tail = [];//an array object for the tail

    //receives the position where the food is
    this.eat = function (pos) {
        //creates a distance variable to where the snake is in relation to where the food is
        var d = dist(this.x, this.y, pos.x, pos.y);
        //tells me wheter or not the snake reaches the food
        if (d < 1) {
            this.total++;//if snake eats the food, total goes up to one
            score += 1;
            return true;
        } else {
            return false;
        }
    }

    //directions function receives two values x and y  
    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    //function that updates object's moves based on current lcoation + speed.   
    this.update = function () {

        //If the total is the same size as array length, meaning no food has been eaten, then shift everything over
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) { //as snakes move shift spots down getting the new spot at the end of the array
                this.tail[i] = this.tail[i + 1];//as it moves shift everything over by one
            }
        }

        this.tail[this.total - 1] = createVector(this.x, this.y);//when I am done moving I want the last spot to create Vector on the tail equals to current location of snake

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        //When snake touches the corners, players dies
        if (this.x < 0) {
            noLoop();
            gameOver = true;

            //Losing message
            background(255);
            textSize(30);
            noStroke();
            fill(255, 105, 180);
            text("You lost", height / 2, 250);
            text("LOL", 270, 300)
            //Try again text
            push();
            textAlign(CENTER, CENTER);
            textSize(24);
            fill('black');
            text("Click on R to try again.", 295, 350);
            pop();
        }
        if (this.x > 620) {
            noLoop();
            gameOver = true;

            //Losing message
            background(255);
            textSize(30);
            noStroke();
            fill(255, 105, 180);
            text("You lost", height / 2, 250);
            text("LOL", 270, 300)
            //Try again text
            push();
            textAlign(CENTER, CENTER);
            textSize(24);
            fill('black');
            text("Click on R to try again.", 295, 350);
            pop();
        }
        if (this.y < 0) {
            noLoop();
            gameOver = true;

            //Losing message
            background(255);
            textSize(30);
            noStroke();
            fill(255, 105, 180);
            text("You lost", height / 2, 250);
            text("LOL", 270, 300)
            //Try again text
            push();
            textAlign(CENTER, CENTER);
            textSize(24);
            fill('black');
            text("Click on R to try again.", 295, 350);
            pop();
        }
        if (this.y > 460) {
            noLoop();
            gameOver = true;

            //Losing message
            background(255);
            textSize(30);
            noStroke();
            fill(255, 105, 180);
            text("You lost", height / 2, 250);
            text("LOL", 270, 300)
            //Try again text
            push();
            textAlign(CENTER, CENTER);
            textSize(24);
            fill('black');
            text("Click on R to try again.", 295, 350);
            pop();
        }

        //to constrain snake getting off the grid
        this.x = constrain(this.x, 0, 620);
        this.y = constrain(this.y, 0, 460);

        //To win the game, needs to eat at least 100 blue flies
        if (score >= 25) {
            noLoop();
            // background("white");

            // //Winning message
            // textSize(30);
            // stroke(0, 200, 255)
            // fill('pink');
            // text("𓃗", 320, 200);
            // text("𝓨𝓪𝔂𝔂!!\n" +
            //     "𝓨𝓸𝓾 𝓹𝓻𝓸𝓽𝓮𝓬𝓽𝓮𝓭 𝓽𝓱𝓮 𝓹𝓪𝓵𝓪𝓬𝓮!\n" +
            //     "𝓣𝓱𝓮 𝓾𝓷𝓲𝓬𝓸𝓻𝓷𝓼 𝓪𝓻𝓮 𝓼𝓸 𝓹𝓻𝓸𝓾𝓭 𝓸𝓯 𝔂𝓸𝓾!", 320, 260);
        }
    }

    this.show = function () {
        //food

        stroke(random(255), random(0, 230), random(43, 234));
        fill(random(255), random(0, 230), random(43, 234));


        //draw the tails when food is eaten
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }

        //the snake
        push();
        noStroke();
        fill(255, 179, 248);
        rect(this.x, this.y, scl, scl);
        pop();
    }
}

function mousePressed() {
    //Instructions button
    if (showInstructions) {

        // Try Again button (same numbers as your rect)
        if (mouseX > 232.5 && mouseX < 357.5 &&
            mouseY > 325 && mouseY < 375) {

            // Restart:
            score = 0;
            s = new Snake();
            pickLocation();
            showInstructions = false;
            loop(); // resume draw loop
            return;
        }
    }
}
