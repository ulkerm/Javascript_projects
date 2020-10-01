const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeClac, calcNumber) {
    const calcDescription = `${resultBeforeClac} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, nextResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: nextResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}     

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    let mathOperator;
    if (calculationType ==='ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType ==='SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType ==='MULTIPLE') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialNumber, enteredNumber);
    writeToLog(calculationType, initialNumber, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}    

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLE');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
