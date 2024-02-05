// 4. Split the string alphabet into an array of characters.

// String.prototype.split()
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let characters = alphabet.split(''); 
console.log(characters); 

// Array.from()
let charactersAlt = Array.from(alphabet); 
console.log(charactersAlt);

