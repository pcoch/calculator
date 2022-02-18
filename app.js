//global variables
let screenValue = '';
let firstNum = '';
let secondNum = '';
let operator = '';
let currentAnswer = '';

//storing html elements
const screen = document.querySelector('.calculator-screen');
const numBtns = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const decimalBtn = document.getElementById('decimal');

//when button is clicked with mouse
for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', updateScreen)
};

function updateScreen(event) {
    if (screenValue.length <= 10) {

        if (operator === "") {
            firstNum += event.target.innerText;
            screenValue = firstNum;
            screen.innerHTML = screenValue;
        }

        if (operator !== "") {
            secondNum += event.target.innerText;
            screenValue = secondNum;
            screen.innerHTML = screenValue;
        }

        if (screenValue.includes('.') === true) {
            decimalBtn.removeEventListener('click', updateScreen);
        }
    }
};

// when num button is input with keypad
document.addEventListener('keydown', (event) => {
    keyUpdate(event)
});

function keyUpdate(event) {
    let key
    key = event.key;

    if (screenValue.length <= 10) {

        if (isFinite(event.key) === true) {

            if (operator === "") {
                firstNum += key;
                screenValue = firstNum;
                screen.innerHTML = screenValue;
            }

            if (operator !== "") {
                secondNum += key;
                screenValue = secondNum;
                screen.innerHTML = screenValue;
            }
        }
    }
    //backspace functionality
    if (event.key === 'Backspace' && operator === "") {
        firstNum = screen.innerHTML.slice(0, -1);
        screenValue = firstNum;
        screen.innerHTML = screenValue;
    }

    if (event.key === 'Backspace' && operator !== "") {
        secondNum = screen.innerHTML.slice(0, -1);
        screenValue = secondNum;
        screen.innerHTML = screenValue;
    }
};

//when operator is clicked
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener('click', (event) => {

        if (firstNum !== "" && secondNum !== "") {
            calculateAnswer(firstNum, secondNum, operator)
            firstNum = answer;
            secondNum = "";
            operator = "";
        }

        screenValue = "";
        operator = event.target.getAttribute('id');
        decimalBtn.addEventListener('click', updateScreen);

    })
};

//when clear is clicked
clearBtn.addEventListener('click', () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    screenValue = "";
    screen.innerHTML = screenValue;
});


//when equal button is clicked
equalBtn.addEventListener('click', () => {
    calculateAnswer(firstNum, secondNum, operator);
});

//limiting answer to 5 decimal places
function checkDecimal() {
    if (Number.isInteger(answer) === true) {
        screen.innerHTML = answer;
    } else {
        screen.innerHTML = answer.toFixed(2);
    }
};

//calculation function
function calculateAnswer(firstNum, secondNum, operator) {
    console.log(`firstnum is ${firstNum} secondNum is ${secondNum} operator is ${operator}`)

    switch (operator) {
        case "add":
            answer = parseFloat(firstNum) + parseFloat(secondNum);
            checkDecimal()
            break;

        case "divide":
            if (secondNum == 0) {
                screen.innerHTML = 'oi nah ☹️';
            }
            answer = parseFloat(firstNum) / parseFloat(secondNum);
            checkDecimal()
            break;

        case "multiply":
            answer = parseFloat(firstNum) * parseFloat(secondNum);
            checkDecimal()
            break;

        case "subtract":
            answer = parseFloat(firstNum) - parseFloat(secondNum);
            checkDecimal()
    }
}