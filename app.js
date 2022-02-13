//Scope & Functionality
//when user clicks number it adds on top of the other number to create a new number called firstNum
//when  user clicks an operator, the first number is stored and displayed
//when user clicks number it adds on top of the other number to create a new number creating secondNum
//when user clicks equals it operates and updates display value (calculate)

//variables
let screenValue = ''
let firstNum = ''
let secondNum = ''
let operator = ''

const screen = document.querySelector('.calc-screen');
const numBtns = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const decimalBtn = document.getElementById('decimal');

//when number is clicked
for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', (event) => {

        if (operator === "") {
            screenValue = screenValue + event.target.innerText;
            firstNum = screenValue;
            screen.innerHTML = firstNum;
        }

        if (operator !== "") {
            screenValue = screenValue + event.target.innerText;
            secondNum = screenValue;
            screen.innerHTML = secondNum;
        }

        //only allow decimal click after a num

    })
}

//when operator is clicked
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener('click', (event) => {
        screenValue = "";
        operator = event.target.getAttribute('id');
    })
}

//when clear is clicked
clearBtn.addEventListener('click', () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    screenValue = "";
    screen.innerHTML = screenValue;
})

//when equal button is clicked
equalBtn.addEventListener('click', (num1, num2, op) => {
    console.log(`firstnum is ${firstNum} secondNum is ${secondNum} operator is ${operator}`)
    switch (operator) {
        case "add":
            screen.innerHTML = parseFloat(firstNum) + parseFloat(secondNum);
            break;

        case "divide":
            screen.innerHTML = parseFloat(firstNum) / parseFloat(secondNum);
            break;

        case "multiply":
            screen.innerHTML = parseFloat(firstNum) * parseFloat(secondNum);
            break;

        case "subtract":
            screen.innerHTML = parseFloat(firstNum) - parseFloat(secondNum);
    }
})


//old code
// function updateDisplay(event) {
// screenValue = screenValue + event.target.innerText;;
// firstNum = screenValue;
// screen.innerHTML = screenValue;

// if (firstNum !== "") {
//     screenValue = screenValue + event.target.innerText;;
//     secondNum = screenValue;
//     // console.log(secondNum);
//     screen.innerHTML = screenValue;
// }
// }


// function subtract(num1, num2) {
//     return num1 - num2
// }

// function multiply(num1, num2) {
//     return num1 * num2
// }

// function divide(num1, num2) {
//     return num1 / num2
// }

// function percent(num1, num2) {
//     return num1 % num2
// }