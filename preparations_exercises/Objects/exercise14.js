// 14. Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace'); // primitives won't be created until we run the code so arguments 'Hi', 'Grace' aren't included as primitives
let foo = xyzzy();



// variables : only includes obj properties on the global obj
 // hello, greeting, name
 // xyzzy
 // howdy 
 // foo 
 

// object property names 
  // a, b, c, d
  // 0, 1, 2 => array indices of inner array

// primitive values 
  // - '' 
  // - a, b, c, d => coerced to strings
  // - 1, 2, 3, 4, 5 => property values
  // - 0, 1, 2 => array indices of inner array
  // - 'hi', 'Grace' 

// objects 
  // function hello (greeting, name) { return greeting + ' ' + name}; 
  // function xyzzy () { return { a: 1, b: 2, c: [3, 4, 5], d: {} };}
  // [3, 4, 5]
  // {}