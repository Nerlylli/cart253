/**
 * Bouncy Ball Ball Bonanza
 * Nerly Cadet, Ya Xuan Pang, Ashmitha Kanagiah
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

//Balls
let ball1 = undefined;
let ball2 = undefined;

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);

    //Create the balls
    ball1 = createBall();
    ball2 = createBall();

}

/**
 * The values of the balls
 */
function createBall() {
    let ball = {
        x: random(50, width - 50),
        y: 20,
        velocity: {
            x: 0,
            y: random(2, 10),
        }
    };
    return ball;
}

/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    //Move balls
    moveBall(ball1);
    moveBall(ball2);

    //Move paddle
    movePaddle(paddle);

    //Check for bounces
    handleBounce(ball1, paddle);
    handleBounce(ball2, paddle);

    //Display balls
    drawBall(ball1);
    drawBall(ball2);

    //Display paddle
    drawPaddle(paddle);

}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    paddle.x = mouseX;


}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;

}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {
    //check if ball overlaps the paddle
    const overlap = checkOverlap(ball, paddle);
    //if there is an overlap, bounce the ball back up
    if (overlap) {
        ball.velocity.y *= -1;
    }
}

function checkBallOverlap(ball, paddle) {
    let result = (ball.x + ball.size > paddle.x &&
        ball.x < paddle.x + paddle.width &&
        ball.y + ball.size > paddle.y &&
        ball.y < paddle.y + paddle.height);
    return result;
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
    return (rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
        rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
        rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
        rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2);
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

