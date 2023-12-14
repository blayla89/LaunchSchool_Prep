// 7. Without running the following code, what do you think it will output?


function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

// = 'Hello' 
// = undefined
// reason: we only pass one argument while we foo defines 2 parameters
  // the bar parameter will be initialized to 'Hello' 
  // the qux parameter will be implicitly initialized to undefined because we didn't pass a param 
  // line 5 will log 'Hello' 
  // line 6 will log undefined