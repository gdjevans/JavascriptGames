//retrieve canvas & create content.
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//rest of the elements
let n = document.getElementById('new');
let pause = document.getElementById('pause');
let score = document.getElementById('score');

//create variables needed
//create the array that'll hold the entire snake
let snake = [];
let size = 10;
let key = '';
let snakeMove;
let oldHead = {};
let pauseState = false;
let startState = false;
let apple = {};
let scoreValue = 0;
let X, Y;

//Event listeners for movements & buttons
n.addEventListener('click', newGame);
pause.addEventListener('click', pauseGame);

if(pause == false) {
    document.addEventListener('keydown', directSnake);
}

function newGame() {
    scoreValue = 0;

    if(startState == false) {
        n.innerText = 'New Game';
        startState = true;
    }
    else {
        //clear everything
        clearInterval(snakeMove);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pauseState = false;
        document.addEventListener('keydown', directSnake);
    }

    

    //clear the snake
    snake = [];
    //draw a new snake
    snake[0] = {
        x : canvas.width/2,
        y : canvas.height/2
    }

    //draw the first snake
    drawSnake();

    //draw the first apple
    drawApple();
    
}

function pauseGame() {

}

function directSnake(e) {
    //clear the current interval
    clearInterval(snakeMove);
    //snake should only move in forward direction, not backward 
    // 37 - L, 38 - U, 39 - R, 40 - D
    if((key == 'U' && e.keyCode != 40) || (key == 'D' && e.keyCode != 38) || (key == 'L' && e.keyCode != 39) || (key == 'R' && e.keyCode != 37)) {
        //change the direction
        switch(e.keyCode) {
            case 37: key = 'L';
            break;
            case 38: key = 'U';
            break;
            case 39: key = 'R';
            break;
            case 40: key = 'D';
            break;
        }
    }

    snakeMove = setInterval(moveSnake, 200);
}

function drawSnake() {
    for(let i = 0; i<snake.length; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[i].x, snake[i].y, size, size)
    }
}

function drawApple() {
    apple = {
        x : Math.round((Math.random() * 490) /10) * 10,
        y : Math.round((Math.random() * 490) /10) * 10
    };
    ctx.fillStyle = 'red';
        ctx.fillRect(apple.x, apple.y, size, size)
    
}