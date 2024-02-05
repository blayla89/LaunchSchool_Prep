// Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

// No, there is no built-in way to acheive Mountain Caps -> will need to write code yourself to achieve


// Example code
let string = 'winston'

function mountainCaps (word) {
  return word.at(0).toUpperCase() + string.substring(1); 
}

console.log(mountainCaps(string)); 