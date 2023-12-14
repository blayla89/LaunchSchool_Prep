```js
  function multiply(left, right) {
    let product = left * right;
    return product;
  }

  function getNumber(prompt) {
    return parseFloat(question(prompt)); // example of a function composition
  }

  let left = getNumber('Enter the first number: ');
  let right = getNumber('Enter the second number: ');
  console.log(`${left} * ${right} = ${multiply(left, right)}`); //  method invocation
```


Exercises: 

9. Identify all of the variables named on each line of the following code. You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).
10. Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, you may assume that the code from Exercise 9 is the entire program.
11. Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.



Solution for exercises 9 -10: 
| line     | variable                               | scope                                |
| -------- | -------------------------------------- | ------------------------------------ |
| line 1   | `multiply`,`left`, `right`             | global, local(fxn), local(fxn)       |
| line 2   | `product`, `left`, `right`             | local(block), local(fxn), local(fxn) |
| line 3   | `product`                              | local(block)                         |
| line 6   | `getNumber`, `prompt`                  | global, local(fxn)                   |
| line 7   | `parseFloat`, `question`, `prompt`     | global, global, local(fxn)           |
| line 10  | `left`,`getNumber`                     | global, global, global               |
| line 11  | `right`, `getNumber`                   | global, global                       |
| *line 12 | `console`, `left`, `right`, `multiply` | global, global, global               |

  **console is the variable name for the built-in Console object.*
  * `console` is a variable name that stores an object
  * `.log()` = a property name; 
    * it is a property of `console` =>  while it's a valid identifer, it is not considered a variable name because only properties on the global object are variables (`Window` in the browser)

Solution for exercise 11: 
* No, left & right variables on lines 1 & 2 are local variables, scoped to the fxn => they are created and destroyed every time that function runs
  *  Params are always scoped to the function that defines them and are therefore not accessible outside it; they do, however, shadow the variables on lines 10-12
* left & right variables on lines 10-12 are globally scoped variables that are independent from those on lines 1 & 2
