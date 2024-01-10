// 5. Refactor this statement to use an if statement instead.

// return foo() ? 'bar' : qux();  => either return 'bar' or return qux()

if(foo()) {
  return 'bar'; 
} else {
  return qux(); 
}