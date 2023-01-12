let fruit = 'Apple';

let num = 5;

let num1 = 1.5;

let isHere = false;


// Conditional statements
// if else, esle if, switch

// If condition is true
//     Do this
// else
//     Do this

// if(condition) {
//     lines of code
// }
// else {
//     lines of code
// }

// switch(variable or condition) {
//     case "first": statements/lines of ConvolverNode;
//                     break;
//     case "second" : statements;
//                     break;
//     default: statements;   
// }

// let num20 = 5;

// switch(num20) {
//     case 1: alert("The number is 1");
//     break;
//     case 3: alert("The number is 3");
//     break;
//     case 5: alert("The number is 5");
//     break;
//     case 7: alert("The number is 7");
//     break;
//     default: alert("The number is unknown");
// }

// Looping statements

// for(initialisation; condition; increment) {
//     statement / lines of code
// }

// for(let i = 1; i<=5; i++){
//     document.write(i);
// }

//Arrays

// let number = new Array();
// number = [1, 2, 3, 4, 5];
// alert(number[0]);
// number [5] = 6;
// //[1, 2, 3, 4, 5, 6];
// number[4] = 7;
// //[1, 2, 3, 4, 7, 6];

// let number1 = ["one", "two", "three"];
// alert(number1[1]);

//2 dimensional arrays
//arrays within arrays

// var numValues = [[1,2,3], [4,5,6], [7, 8, 9]];
// alert(numValues[0][1]);

//Function
//function definition

// function functionName() {

// }

// //function call

// functionName();


// let numFirst = 5;
// let numSecond = 6;

// function sumNum(n1, n2) {
//     let sum = n1 + n2;
//     return sum;
// }

// let valSum = sumNum(numFirst, numSecond);
// alert("the sum of the number " + valSum)

//DOM manipulation
//Document Object Model 

document.getElementById("para1").innerText = "hello, how are you?";

let para = document.getElementById("para1");
para.innerText = "Hello, how are you;"; 

// Click event

function buttonClick() {
    alert("Thanks for clicking the fabulous button");
}


//addEventListener()

//document.getElementById("button1").addEventListener("click", buttonClick);

let button = document.getElementById("button1");
button.addEventListener("click", buttonClick);

let mouseTest = document.getElementById("mouseTest");
mouseTest.addEventListener("mousedown", downEvent);
mouseTest.addEventListener("mouseup", upEvent);
mouseTest.addEventListener("mousemove", moveEvent);

function downEvent() {
    mouseTest.style.backgroundColor = "yellow";
}

function upEvent() {
    mouseTest.style.backgroundColor = "red";
}

function moveEvent() {
    mouseTest.style.backgroundColor = "green";
}
// OBJECTS
// let person1 = {Name:"Susan", Age:35, Height:160, Hair:"blonde"};
// let Person2 = {Name:"Gary", Age:41, Height: 180, Hair:"blonde", Eye:"blue"};

// 1. objectName.propertyName
// 2. objectName["propertyName"]

// alert(person1.Height);
// alert(person1["Age"]);

// let person = [{Name:"Susan", Age:35, Height:160, Hair:"blonde"}, {Name:"Gary", Age:41, Height: 180, Hair:"blonde", Eye:"blue"}];

// alert(person[1].Eye);

// CANVAS
// Step 1: Finding the canvas on which you want to draw on.

let canvas = document.getElementById("canvas1");

// Step 2: Create a drawing object.

let ctx = canvas.getContext("2d");

// Step 3: Drawing on canvas - lines - colouring

ctx.moveTo(10,10);
ctx.lineTo(90,100);

ctx.strokeStyle = "red";
ctx.stroke();

// Step 4: Drawing on canvas - multiline path

//path
ctx.beginPath();

ctx.moveTo(100,100);
ctx.lineTo(200, 200);
ctx.moveTo(100,100);
ctx.lineTo(100, 200);
ctx.lineTo(200, 200);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.closePath();

ctx.beginPath();

ctx.moveTo(300,300);
ctx.lineTo(300,400);
ctx.lineTo(400,400);
ctx.lineTo(300,300);
// ctx.strokeStyle = "blue";
// ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

ctx.closePath();

//arcs

ctx.beginPath();
ctx.arc(300, 150, 50, 0, Math.PI, true);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();