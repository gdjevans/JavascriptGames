const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from the user field.
function getUserNumberInput() {
    return parseInt(userInput.value);
}

//Generates and writes calculation log step.
function createandWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file.
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult += enteredNumber;
    createandWriteOutput('+', initalResult, enteredNumber);
    writeToLog('ADD', initalResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult -= enteredNumber;
    createandWriteOutput('-', initalResult, enteredNumber);
    writeToLog('SUBTRACT', initalResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult *= enteredNumber;
    createandWriteOutput('*', initalResult, enteredNumber);
    writeToLog('MULTIPLY', initalResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult /= enteredNumber;
    createandWriteOutput('/', initalResult, enteredNumber);
    writeToLog('DIVIDE', initalResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


//currentResult = (currentResult + 10) * 3 / 2 -1;
//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 -1`;


