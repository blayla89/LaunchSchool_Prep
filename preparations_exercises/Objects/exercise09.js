// 9. What does the following program log to the console? Why? 

/* Creates a re-assignable variable, foo, and stores a pointer to a simple obj */
let foo = {
  a: 'hello',
  b: 'world',
};

/* creates a re-assignable variable qux and inits with primitive string */
let qux = 'hello';

/* declares function with variable name bar that takes two arguments and updates its arguments during invocation */
function bar(argument1, argument2) {
  /* updates argument1's object property to a new string */
  argument1.a = 'hi';
  /* re-assigns argument2 to primitive string */
  argument2 = 'hi';
}

// funciton invocation: argument1 init to object, argument2 init to primitve string 
bar(foo, qux);


console.log(foo.a); // => 'hi' => mutates object property,  persists
console.log(qux);   // => 'hello' => arg init to primitive, primitives are immutable - reassigned value only available locally (fxn)
// we log the global value of qux, which is resolved with 'hello' (not mutated by fxn) because argument2 = 'hi' is only locally accessible

