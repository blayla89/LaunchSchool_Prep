// 10. Run the following code. 
  // You'll see that it raises an error
    // TypeError: tweet.length is not a function
  // Check the documentation of both TypeError and length, in order to find out what causes the error.

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

/*
  What is a TypeError?
  ------------------------------------
  TypeError : an object representing an error when an operation cannot be performed
    - usu. value is not the type expected 
    - Constructor : TypeError()
    - Parent : Error

    .length() => code is attempting to use a value in an inappropriate way 
      - .length is a property, not a function therefore it cannot be invoked - we are attempting to invoke it as indicated by the parentheses, but that is not its intended use
      - tweet.length expects a number (the return value of length ) 
         - tweet expects a number, but code tries to use it as a function = type mismatch!
*/


