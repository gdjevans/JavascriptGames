let canvas, canvasContext;

let blueCar = new carClass();
let greenCar = new carClass();

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    colorRect(0, 0, canvas.width,canvas.height, 'black');
    colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

    loadImages(); 
}

function imageLoadingDoneSoStartGame() {
    let framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);
    
    setupInput();
    
    loadLevel(levelOne);
}

function loadLevel(whichLevel) {
    trackGrid = whichLevel.slice();
    greenCar.reset(otherCarPic, "Green Car");
    blueCar.reset(carPic, "Blue Car");
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
    greenCar.move();
    blueCar.move();
    carTrackHandling(blueCar);
}

function clearScreen() {
    colorRect(0,0, canvas.width, canvas.height, 'black');
}


function drawAll() {
    //clearScreen();
    drawTracks();
    greenCar.draw();
    blueCar.draw();
}

