
// 3. Modify the age.js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program.

// Original: From age.js File 

  /*
    let age = 20; 
    console.log(`You are ${age} years old.`); 
    console.log(`In 10 years, you will be ${age + 10} years old.`); 
    console.log(`In 20 years, you will be ${age + 20} years old.`); 
    console.log(`In 30 years, you will be ${age + 30} years old.`); 
    console.log(`In 40 years, you will be ${age + 40} years old.`);
  */

// Updated

  // tools:
    // node REPL 
    // readline-sync object
    // require, question, and console.log() methods 
    // explicit coercion, parseInt() method
    // template literal notation and interpolation 

  // Steps: 
    // download rlsync object 
    // request age and store value in variable => explicitly coerce value to number
    // update the age variable by 10 year increments until reaching 40 and display the result to console for each update 

let rlsync = require(`readline-sync`); 
let age = parseInt(rlsync.question(`How old are you?`));
console.log(`You are ${age} years old.`)
for(let i = 10; i <= 40; i += 10){
  console.log(`In ${i} years, you will be ${age + i} years old.`)
}

