// 10. In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.

console.log('8' == 8); // => true : loose equality performs type coercion 1st, then check the values for sameness 
console.log('8' === 8); // => false : strict equality operator does NOT perform type coercion - if type differs, returns false - this operator checks both type AND value 