// 1. Given the following code, how can you access the name of the person?

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

// Access = dot or bracket notation
console.log(person.name); 
console.log(person['name']);


// bracket notation required for variables!
let variable = 'name'; 

console.log(person[variable])

