
var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;



window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/30);
   
}

function moveEverything(){
    ballX += ballSpeedX;

    if(ballX < 0){
        ballSpeedX = -ballSpeedX;
    }
    
    if(ballX  > canvas.width){
        ballSpeedX = -ballSpeedX;
    }

}

function drawEverything(){
  
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0, canvas.width, canvas.height);
    canvasContext.fillStyle = "red";
    canvasContext.beginPath();
    canvasContext.arc(ballX, 100, 10, 0, Math.PI*2, true)
    canvasContext.fill();
    
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(0, 200, 25, 100)
    


}

function colorRect(leftY, rightX, wide, tall, rectColor){
    canvasContext.fillstyle = rectColor;
    canvasContext.illRect(leftY, rightX, wide, tall);
}