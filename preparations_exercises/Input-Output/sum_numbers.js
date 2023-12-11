// Input in the CLI : Demonstrating requesting and obtaining user input 

let rlSync = require(`readline-sync`); 
// Returned value of question() method is a string => JS will perform concatenation:
/* let number1 = rlSync.question(`Enter the first number`); 
let number2 = rlSync.question(`Enter the second number`);  */

// Explicit coercion: String to Number with Number() method
let number1 = Number(rlSync.question(`Enter the first number`));
let number2 = Number(rlSync.question(`Enter the second number`));

let sum = number1 + number2; 
console.log(`the nubmers ${number1} + ${number2} add to ${sum}`); 