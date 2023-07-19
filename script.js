const formula = document.querySelector('.formula');
const answer = document.querySelector('.answer');

// displays equation above the results line
let funcString = '';
// stores current operands and operator in an array
let heldInput = [];
// temp variable to store more nums before appending to heldInput
let tempNum = '';
// variables for saving operand
let inputA;
let inputB;
// to be produced when user clicks equal
let ans;
// assign current operator to variable
let currentOperator

function keyIn(x) {
    if (x === '/' || x === '*' || x === '-' || x === '+') {
        funcString += x;
        if (tempNum !== '') {
            heldInput.push(tempNum);
        }
        console.log(heldInput);
        if (heldInput.length === 2) {
            operate();
            currentOperator = x;
            funcString += currentOperator;
            formula.textContent = funcString;
        }
        currentOperator = x;
        tempNum = '';
        formula.textContent = funcString;
    } else if (x === '=') {
        heldInput.push(tempNum);
        funcString += x;
        formula.textContent = funcString 
        operate();
        answer.textContent = ans
        tempNum = '';
    } else {
        tempNum += x;
        funcString += x;
        answer.textContent = tempNum;
    }
}

function operate() {
    inputA = Number(heldInput[0]);
    inputB = Number(heldInput[1]);
    if (currentOperator === '/') {
        ans = divide(inputA, inputB);
    } else if (currentOperator === '*') {
        ans = multiply(inputA, inputB);
    } else if (currentOperator === '-') {
        ans = subtract(inputA, inputB);
    } else if (currentOperator === '+') {
        ans = add(inputA, inputB);
    }
    heldInput = [ans];
    funcString = [ans];
    return ans;
}

function clearAll() {
    heldInput = [];
    tempNum = '';
    funcString = '';
    formula.textContent = '0';
    answer.textContent = '0';
}

function clearCurrent() {
    if (tempNum.length === 1) {
        tempNum = '';
        funcString = '';
    }
    tempNum = tempNum.slice(0,1);
    funcString = funcString.slice(0,1);
    answer.textContent = tempNum;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x*y
}

function divide(x, y) {
    return x/y
}