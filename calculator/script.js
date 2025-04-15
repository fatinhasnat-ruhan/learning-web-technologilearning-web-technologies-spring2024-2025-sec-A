const calculator = document.getElementById('calculator');

// Create display
const display = document.createElement('input');
display.type = 'text';
display.id = 'display';
display.disabled = true;
display.placeholder = '0';
calculator.appendChild(display);

let firstNumber = null;
let operator = '';
let percentageMode = false;

// Buttons
const buttons = [
  '7', '8', '9', '+',
  '4', '5', '6', '-',
  '1', '2', '3', '*',
  '0', '%', '=', '/',
  'CE'
];

// Create buttons
buttons.forEach(char => {
  const btn = document.createElement('button');
  btn.textContent = char;
  btn.onclick = () => handleClick(char);
  calculator.appendChild(btn);
});

function handleClick(value) {
  if (!isNaN(value)) {
    // Number clicked
    display.value += value;
  } else if (['+', '-', '*', '/'].includes(value)) {
    firstNumber = parseFloat(display.value);
    operator = value;
    display.value = '';
    percentageMode = false;
  } else if (value === '%') {
    percentageMode = true;
  } else if (value === '=') {
    let secondNumber = parseFloat(display.value);
    if (percentageMode) {
      secondNumber = secondNumber / 100;
    }

    let result;
    switch (operator) {
      case '+':
        result = firstNumber + (percentageMode ? firstNumber * secondNumber : secondNumber);
        break;
      case '-':
        result = firstNumber - (percentageMode ? firstNumber * secondNumber : secondNumber);
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
      default:
        result = 'Error';
    }
    display.value = result;
    firstNumber = null;
    operator = '';
    percentageMode = false;
  } else if (value === 'CE') {
    display.value = '';
    firstNumber = null;
    operator = '';
    percentageMode = false;
  }
}
