// 1. Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:


// CLI 
  let rlsyncObj = require(`readline-sync`); 
  let name = rlsyncObj.question(`What is your name?`); 
  console.log(`Hello, ${name}!`);


