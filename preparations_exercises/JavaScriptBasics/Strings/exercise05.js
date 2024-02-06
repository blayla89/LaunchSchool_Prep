// 5. Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?

  // Strings are case sensitive - if you want to check whether strings are equal regardless of the case, you will need to convert all of the characters in each string to the same case first - then check for equality

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function caseSensitive (first, second) {
  return first === second; 
}

console.log(caseSensitive(string1, string2)); // => false
console.log(caseSensitive(string3, string2)); // => false

function caseInsensitive(first, second) {
  return first.toLowerCase() === second.toLowerCase(); 
}

console.log(caseInsensitive(string1, string2)); // => true
console.log(caseInsensitive(string3, string2)); // => false

  