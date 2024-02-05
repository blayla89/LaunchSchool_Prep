// 8. Consider the following code snippet:

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool"; // String

let words = tweet.split(' '); // Array
let isValid = tweet.length < 140; // Boolean

// What will the following statements return?

console.log(typeof tweet);   // => string
console.log(typeof words);   // => object ! CAREFEUL : typeof returns 'object' for arrays !
console.log(typeof isValid); // => boolean

