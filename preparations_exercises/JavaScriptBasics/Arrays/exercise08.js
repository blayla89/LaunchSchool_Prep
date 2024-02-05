// 8. How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

function filter(input) {
  // Is input an array?
  console.log(Array.isArray(input)); 
}

filter([1,3,4]); // true 
filter('Hello World'); // false
filter({ a : 1, b : 2}); // false


// Arrays are actually objects, so you can't use typeof. Instead, you can use an alternative method such as Array.isArray() which returns a boolean.