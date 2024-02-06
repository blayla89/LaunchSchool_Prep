// 7. Write a function that checks whether a string is empty or not. For example:
  /*  
    console.log(isBlank('mars')); // false
    console.log(isBlank('  '));   // false
    console.log(isBlank(''));     // true
  */

// When is a string empty ? => when it contains 0 characters 
  // can check with String.prototype.length property  
    // an empty string = length of 0

function isBlank (string) {
  return string.length === 0; 
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true