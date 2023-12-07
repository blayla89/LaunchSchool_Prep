// 4. Explain why this code logs '510' instead of 15.

console.log('5' + 10);

/* Explanation */
/* 
  The + opertor performs concatenation when at least one of the operands is a String data type. In order to perform the operation, it implicitly coerces the Number 10 to a String type and merges them together which results in '510
 */

// 5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

console.log(Number('5') + 10); 


// 6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

// The value of 5 + 10 is 15.


console.log(`The value of 5 + 10 is ${Number('5') + 10}.`); 