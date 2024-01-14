// 5. The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.


// ||||||||||||||||||||||||||  ORIGINAL PROGRAM  |||||||||||||||||||||||||||||||||| \\
/*  
  function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let tries = 0;                
  let result = randomNumberBetween(1, 6);          <= Refactored: see # 1
  tries += 1;                                      <= Refactored: see # 2

  while (result <= 2) {                            <= Refactored: see = 3
    result = randomNumberBetween(1, 6);
    tries += 1;
  }

  console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
*/
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| \\

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

let tries = 0;  // variable to store number of tries
let result; 

do {
  result = randomNumberBetween(1, 6);  // calls here
  tries += 1;
} while (result <= 2)

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// **Refactored components:** 
/*
    1. Now declares `result` as a global, uninitialized variable (implicitly undefined) and lets the loop take care of reassigning the result (the value of the function call)
    2. removes increment / assignment duplication for `tries += 1` because it is already being done inside the loop body
    3. converts the `while` loop to a `do while` loop
        a. because the code needs to run at least one time (to log the string of the result) to the console since it is possible to generate a number greater than 2
*/
