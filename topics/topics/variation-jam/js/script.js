/**
 * Variation Jam
 * Nerly Cadet
 * 
 * DESCRIPTION OF CODE
 * 
 * WHAT TO ADD
 * Add another rect. to represent the bull (villain)
    * Goal: to avoid touching the bull with the snake
 * Game is lost when corners are touched by snake
    * X(0,600)
    * Y(0,480)
 * 
 * VARATIONS
 * 1. Redemption when ModJam is lost
 * 2. 
 * 3.
 * 
 * HOW TO PLAY
 * 1. Press Play at the top
 * 2. Click on dark grey canvas (before snake hit the wall)
 * 3. Use key arrows to move snake
 */

let scl = 20; //size of snake and food
let score = 0;
let s = new Snake();
let food;

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
}

//When pressing on the keyboard arrows
function keyPressed() {
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

        //to constrain snake getting off the grid
        this.x = constrain(this.x, 0, 620);
        this.y = constrain(this.y, 0, 460);
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
