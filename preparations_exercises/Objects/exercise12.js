// 12. Consider the following code:

function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo; // <= careful what you're storing here! Storing a fxn object lets us invoke the foo fxn in 2 different ways (bar is an alias)

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"



// As written, this code will raise an error on line 6. Without creating a new function or changing lines 5 or 6, update this code to work as intended.

// Solution => create alias with reference to bar fxn (as fxn object) - be conscientious of what your storing because storing bar vs bar() will have very different outcomes!