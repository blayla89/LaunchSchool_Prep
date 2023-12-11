// 2. Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.

// CLI 

let rlsyncObj = require(`readline-sync`); 
let first = rlsyncObj.question(`What is your first name?`); 
let last = rlsyncObj.question(`What is your last name?`); 
console.log(`Hello, ${first} ${last}!`);  

