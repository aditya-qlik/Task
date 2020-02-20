// Import stylesheets
import './style.css';
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const operation = document.querySelector('#operator');
const submit = document.querySelector('[name="submit"]');

function add(valueOfNum1 = 0, valueOfNum2 = 0) {
        return valueOfNum1 + valueOfNum2;
}
function subtraction(valueOfNum1 = 0, valueOfNum2 = 0) {
        return valueOfNum1 - valueOfNum2;
}
function multiplication(valueOfNum1 = 0, valueOfNum2 = 1) {
        return valueOfNum1 * valueOfNum2;
}
function division(valueOfNum1 = 0, valueOfNum2 = 1) {
        return valueOfNum1 / valueOfNum2;
}
let num1;
let num2;
function checkNumber1(event) {
        num1 = parseFloat(event.target.value);
        const valueOfNumber1 = number1.value;
        // console.log(num1);
        if (valueOfNumber1 === '') {
                num1 = undefined;
        } else if (isNaN(num1)) {
                alert(`enter number only`);
                number1.value = '';
                num1 = undefined;
        }
}
function checkNumber2(event) {
        num2 = parseFloat(event.target.value);
        const valueOfNumber2 = number2.value;
        // console.log(num2);
        if (valueOfNumber2 === '') {
                num2 = undefined;
        } else if (isNaN(num2)) {
                alert(`enter number only`);
                number2.value = '';
                num2 = undefined;
        }
}
number1.addEventListener('blur', checkNumber1);
number2.addEventListener('blur', checkNumber2);
function printResult() {
        const operator = operation.value;
        // console.log(num1, num2);
        switch (operator) {
                case '+':
                        console.log(`the result is ${add(num1, num2)}`);
                        break;
                case '-':
                        console.log(`the result is ${subtraction(num1, num2)}`);
                        break;
                case '*':
                        console.log(`the result is ${multiplication(num1, num2)}`);
                        break;
                case '/':
                        if (num2 === 0) {
                                alert(`2nd Number can't be 0`);
                        } else {
                                console.log(`the result is ${division(num1, num2)}`);
                        }
        }
}
submit.addEventListener('click', printResult);
function clear() {
        console.clear();
        number1.value = '';
        number2.value = '';
}
document.querySelector('#clean').addEventListener('click', clear);


