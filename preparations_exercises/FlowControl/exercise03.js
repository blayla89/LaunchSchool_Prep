// 3. Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

function evenOrOdd(number) {
  // validation check 
  if(!Number.isInteger(number)){
    console.log(`Error: Please enter a valid integer.`)
    return; 
  }
  if(number % 2 === 0) {
    console.log(`even`); 
  } else {
    console.log(`odd`); 
  }
}

// test cases 
evenOrOdd(2.434); // `Error: Please enter a valid integer.`
evenOrOdd(9);     // 'odd'
evenOrOdd(44);    // 'even' 