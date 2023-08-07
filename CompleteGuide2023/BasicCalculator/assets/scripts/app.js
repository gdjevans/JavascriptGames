const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from the user field.
function getUserNumberInput() {
    return parseInt(userInput.value);
}

//Generates and writes calculation log step.
function createandWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file.
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult += enteredNumber;
    createandWriteOutput('+', initalResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult -= enteredNumber;
    createandWriteOutput('-', initalResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult *= enteredNumber;
    createandWriteOutput('*', initalResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult /= enteredNumber;
    createandWriteOutput('/', initalResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


//currentResult = (currentResult + 10) * 3 / 2 -1;
//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 -1`;


