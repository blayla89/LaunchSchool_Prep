// 13. As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.
            
// function foo expects a function as an argument
function foo(bar) {
  console.log(bar()); 
}


// pass an anonymous function as an argument to foo and return the expected value 
foo(function() { return 'Welcome'; }); 
foo(function () { return 3.1415; }); 
foo(function() { return [1,2,3]; }); 
