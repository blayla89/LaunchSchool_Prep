// 6. What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

// Solution: 
  /*
    logs 'Not Empty' => The condition of the if is evaluated for truthiness/falsiness. The argument passed is an empty array, but an empty array is considered a truthy value. Therefore, the condition on line 4 evaluates to truthy and line 5 executes. We would have to use another solution to check for emptiness such as comparing length of the array.
   */