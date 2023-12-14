// 3. Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

// steps: 
  // get two numbers as input from the user => getNumber()
    // explicitly coerce to Number => Number() 
  // multiply two numbers, return result => multiply()
  // ouput equation with the result => console.log()

function getNumber(prompt) {
  let rlSync = require('readline-sync'); 
  return Number(rlSync.question(prompt)); 
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;}

let first = getNumber(`Enter the first number: `); 
let last = getNumber(`Enter the last number: `); 
let total = multiplyNumbers(first, last);
console.log(`${first} * ${last} = ${total}`);