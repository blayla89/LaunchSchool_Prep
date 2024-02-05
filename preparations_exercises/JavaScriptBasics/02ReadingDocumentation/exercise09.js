// 9. The below code raises a SyntaxError. If you run the code, you'll see the following error message:
  // SyntaxError: Unexpected token &&
  // Find and read the documentation about this error on MDN. Then, fix the code.

/*
  What is a Syntax Error ?
  -------------------------------
  - an object representing an error => occurs when invalid JS syntax encountered during parsing 
    - indicates : a specific language construct was expected but something else provided (ex: typo)
    - Constructor = SyntaxError()
      - parent = Error 

 
  Whats the Problem with Code Snippet ?
  -------------------------------------
  - missing *outer* set of parentheses for the condition of the `if`

  if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {  <= ! CAREFUL : missing outer set of parentheses !
    console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
  }

*/

let speedLimit = 60;
let currentSpeed = 80;

// refactored code snippet
if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
  'that computers don\'t have to be that good to be much better." ' +
  '-- Marc Andreessen');
}




