// 4. Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}


 // The code does NOT produce an error. I logs 1 through 5 to the console. 

 // A for loop takes 3 optional arguments: initializer, conditional expression, and afterthought(usually increment/decrement). Just because it takes three arguments doesn't mean we need to pass them explicitly to the `for` . We could define them elsewhere such as in the body or globally. 

// The example code doesn't include the optional afterthought as an **explicit argument** but it does take care of an afterthought by incrementing on line 4. Line 4 performs addition and reassignment BEFORE being logged to the console. That means the next iteration will evaluate 1 against the conditional expression and so on until the value reaches 6. When this happens, the conditional expression and the loop will terminate without logging six to the console. So, the values 1 through 5 will be logged to the console (on separate lines). No error is raise and an infinite loop is avoided.


