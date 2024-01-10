//2. Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

function evenOrOdd(number) {
  if(number % 2 === 0) {
    console.log(`even`); 
  } else {
    console.log(`odd`); 
  }
}

// test cases
evenOrOdd(313); // 'odd'
evenOrOdd(2);   // 'even'
evenOrOdd(56);  // 'even'
evenOrOdd(7);   // 'odd'