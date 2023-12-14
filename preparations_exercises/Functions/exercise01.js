//1. What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);


// Solution: 
  // line 8 => returns undefined : all JS functions evaluate to a value, undefined as default
  // line 9 => returns 1
  // No impact; they are independent variables declared in two different scopes: global and local 
    // Additionally, the function just declares a variable - it doesn't do anything with it. 
      // Even if it did, the global variable is only available when that function runs - once the fxn returns, that variable is destroyed and therefore it would impact the call to console.log() on line 9. 