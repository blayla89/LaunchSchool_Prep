// Recursion = an approach for writing a solution to a problem
  // Recursion = a process(fxn) that calls itself
    // works by invoking the same fxn with different input each time until a base case is met
      // base case = rock bottom = condition we set up for the recursion to end
  // Analogy = Martin and the Dragon 

  // 2 Main features: 
    // 2. fxn calls itself with different input (generally smaller)
    // 1. base case 
   


// Example 1
  function countDown (num) {
    if(num <= 0) {
      console.log('All done!'); 
      return; // ENDS OUR RECURSION!
    }
    console.log(num); 
    num--; 
    countDown(num); 
  }

  countDown(5); 

// Example 2    
  function sumRange(num) {
    if(num === 1) return 1; // base case
    return num + sumRange(num - 1); // different input
  }

  sumRange(5)
   // return 5 + sumRange(4)      [sumRange(5)] => 15
      // return 4 + sumRange(3)   [sumRange(4)] => 10
        // return 3 + sumRange(2)  [sumRange(3)] => 6
          // return 2 + sumRange(1) [sumRange(2)] =>
            // sumRange(1) => 1

  // Example 3
  function doubler(number) {
    console.log(number);
  
    if (number <= 50) {
      doubler(number * 2);
    }
  }
  
  doubler(5); // => 5
              // => 10
              // => 20
              // => 40
              // => 80


