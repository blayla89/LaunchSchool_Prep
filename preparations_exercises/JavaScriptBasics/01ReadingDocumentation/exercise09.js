// 9. Given the following tweet:

let tweet = 'Starting to get the hang of it... #javascript #launchschool';


// What will the following statements evaluate to?

console.log(tweet.split(' ')); // => ['Starting', 'to', 'get', 'the' 'hang', 'of', 'it...', '#javascript', '#launcshool']
console.log(tweet.split(' ').reverse()); // => ['#launchschool', '#javascript', 'it...', 'of', 'hang', 'the', 'get', 'to', 'Starting' ]
console.log(tweet.split(' ').reverse().join(' ')); // => '#launchschool #javascript it... of hang the get to Starting'


// String.prototype.split(pattern) => a String method that takes a *pattern* as an argument, divides the string into substrings based on the pattern passed as an argument, and returns a new array consisting of the substrings
  // - pattern = where the 'split' will occur
  // - no arg => takes calling string, puts entire string into an array as 1 element, returns the new 1 element array

// Array.prototype.reverse() - an array method that reverses the order of the elements in an array (opposite order with the last element now the first and so on...)
  // destructive method - no arguments

// Array.prototype.join() - array method that creates and returns a String 
  // - concatenates the array elements separted by the argument you provide to .join()
    // - default = commas without argument passed