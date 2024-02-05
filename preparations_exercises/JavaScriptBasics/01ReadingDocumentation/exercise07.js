// 7. Look up the MDN documentation for the typeof operator. What is its return value? Determine what the following statements will return:


// typeof = operator -> takes one operand to it's right => returns a string that represents it's operands data type

console.log(typeof 23.5);                // => number
console.log(typeof 'Call me Ishmael.');  // => string
console.log(typeof false);               // => boolean
console.log(typeof 0);                   // => number
console.log(typeof null);                // => object ! Careful: hx bug - can't be fixed now without breaking too much!
console.log(typeof undefined);           //=>  undefined
