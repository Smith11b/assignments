
var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 10;
var ballY = 50;
var ballSpeedY = 10;
var paddle1Y = 0;
var paddle2Y = 250;
const paddleHeight = 100;
const paddleThickness = 25;
var player1Score = 0;
var player2Score = 0;
const winningScore = 5;
var isShowingWinScreen = false;

// this function gets the mouses position no matter where the canvas is in the browser.
function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}



window.onload = function(){
    //makes canvas the canvas dom object
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');


    
//this redraws and changes the x and y of everything at 30 frames per second
    setInterval(function() {
        moveEverything();
        drawEverything();
        computerMovement();

    }, 1000/30);

    // this moves the left paddle on the why axis on mousemove'
    canvas.addEventListener('mousemove', function(evt){
        var mousePos = calculateMousePos(evt);
        paddle1Y = mousePos.y - paddleHeight / 2;
    });
   
}

function ballReset(){
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    //reset score if the score reachins the winning score for either player
    if (player1Score === winningScore || player2Score === winningScore){
        player1Score = 0;
        player2Score = 0;
        isShowingWinScreen = true;
    }
    
}

function moveEverything(){
    if(isShowingWinScreen){
        return;
    }

    // This Changes the cordinates of the ball on both axis;
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    //This changes the direction of the ball if it hits the left boundary 
    //also changes direction if it hits player 1's paddle.
    //resets the ball and adds 1 to player 2's core
    if(ballX < 25){
        if(ballY > paddle1Y && ballY < paddle1Y + paddleHeight){
            ballSpeedX = -ballSpeedX;
            var deltaY = ballY - (paddle1y + paddleHeight / 2);
            ballSpeedY = deltaY * 0.35;
        } else if(ballX < 0){
            player2Score++;
            ballReset();
        }
    }
    
    // this changes the direction of the ball if it hits the right boundary
    //resets the ball and adds 1 to player 1's core
    if(ballX  > canvas.width -25){
        if(ballY > paddle2Y && ballY < paddle2Y + paddleHeight){
            ballSpeedX = -ballSpeedX;
            var deltaY = ballY - (paddle2y + paddleHeight / 2);
            ballSpeedY = deltaY * 0.35;
        } else if(ballX > canvas.width){
            player1Score++;
            ballReset();
        }
    }
    
    // this changes the direction of the ball if it hits the top boundary
    if(ballY < 0){
        ballSpeedY = -ballSpeedY;
        
    }
    
    //this changes the direction of the ball if it hits the bottom boundary
    if(ballY > canvas.height){
        ballSpeedY = -ballSpeedY;
    }

}

function drawEverything(){
  

    // This Draws The Canvas
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0, canvas.width, canvas.height);
    // This Draws the Ball
    colorCircle()
    
    if (isShowingWinScreen){
        canvasContext.fillText("Game Over", 100, 100);
        return;
    }

    //This Draws the left paddle (Paddle1)
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(0, paddle1Y, paddleThickness, paddleHeight)
    // Draws the right (computer Paddle, Paddle2)
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(canvas.width -25, paddle2Y, paddleThickness, paddleHeight)

    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score, canvas.width -100, 100);
}



// The instructions for drawing the ball. Create a 10px arc multiplied by 2 to make a full circle
function colorCircle(){
    canvasContext.fillStyle = "red";
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, 10, 0, Math.PI*2, true)
    canvasContext.fill();

}

function computerMovement(){
    var paddle2YCenter = paddle2Y + paddleHeight / 2;
    if(paddle2YCenter < ballY -35){
        paddle2Y += 6;
    }else if(paddle2YCenter > ballY +35) {
        paddle2Y -= 6;
    }
}