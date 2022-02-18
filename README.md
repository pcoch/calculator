# calculator
Odin Project: Calculator

The calculator works with 4 main variables (firstNum, secondNum, operator, answer).

firstNum is stored as a string when 

The calculateAnswer function uses a Switch statment and uses the operator variable as the case. The operator variable is pulled from a click event on the operator buttons (i.e +, x, /, -), which takes the element ID (e.g 'add', 'subtract' etc).

The main challenge was how to chain operations (i.e 4 x 5 + 6 - 2). At first, I was going to create an array stacking the numbers selected and stacking the operators by pushing onclick events into the arrays. That ended up being overkill.

A much simpler solution was to store the answer variable after bum1 and num2 where stored, and then replace num1 with answer.

//Scope & Functionality
//when user clicks number it adds on top of the other number to create a new number called firstNum
//when  user clicks an operator, the first number is stored and displayed
//when user clicks number it adds on top of the other number to create a new number creating secondNum
//when user clicks equals it operates and updates display value (calculate)