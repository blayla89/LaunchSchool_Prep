// 3. The following code causes an infinite loop (a loop that never stops iterating). Why?


let counter = 0;

while (counter = 1) {     // re-assigns counter to 1
  console.log(counter);   // logs 1 to console
  counter += 1;           // increments => counter now 2

  if (counter > 2) {      // evaluates to false
    break;               // skipped because condition evaluated to false jumps back to line 6
  }             
}


// Solution: 
  /*
    While loops evaluate its conditional expression and run the body of it's code as long as it evaluates to a truthy value. Therefore, we need to set up a condition for it to become falsy. 
    This code looks like that is being done on line 8 with the incrementation of the counter variable and the if statement with a break clause, but there is a big problem on line 6. The conditional expression on line 6 REASSIGNS counter to the value 1 EVERY ITERATION. This means that the conditional expression will ALWAYS be a truthy value because a reassignment expression returns the value it is assigning. The expression on line 10 will never evaluate to false, because counter will never be greater than 2. This creates an infinite loop!
   */