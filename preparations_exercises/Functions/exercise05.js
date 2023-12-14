// 5. What does the following code log to the console? 

function scream(words) {
  return words + '!!!!';
}


scream('Yipeee'); // returns 'Yipeee!!!!' but we won't see it 

// It doesn't log anything to the console - it returns the value 'Yippeee!!!!ß' to the caller on line 9, but since we don't explicitly log/print anything to the console we don't see it. 