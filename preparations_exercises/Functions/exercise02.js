// 2. In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.


// my solution 
  // my issue: misinterpreted as two *separate functions** as opposed to funciton invocations
    // also, less generic / flexible and too much redundancy 
/* 
  let rlsync = require('readline-sync');

  function getFirstName() {
  let first = rlsync.question(`What is your first name?`)
  return first;
  }

  function getLastName() {
  let last = rlsync.question(`What is your last name?`);
  return last;
  }

  console.log(`Good Morning, ${getFirstName()} ${getLastName()}!`); 
*/

// book solution 

  function getName(prompt) {
    let rlSync = require('readline-sync'); 
    let name = rlSync.question(prompt); 
    return name; 
  }

  let firstName = getName(`What is your first name?`); 
  let lastName = getName(`What is your last  name?`); 
  console.log(`Good Morninng, ${firstName} ${lastName}!`);