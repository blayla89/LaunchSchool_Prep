// 4. What does the following code log to the console? 

function scream(words) {
  words = words + '!!!!';
  return;
}

scream('Yipeee'); // fxn returns undefined as value here

// Solution: it doesn't return anything => we reassign the words variable on line 4, but we use the return keyword on line 5 - this quits the function so line 6 never runs and nothing is output to the console. If we were to log the fxn call on line 8 we would see undefined - this is because we didn't provide anything for the return statement to evaluate so instead it returns undefined, which is the default. 