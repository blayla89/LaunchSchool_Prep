// 4. Find the MDN documentation on operator precedence, and use it to find out which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to.

/*
  Arithmetic Operator Precendence 
  -------------------------------------
  1. Grouping
  2. Access and call
  3. new
  4. Post-fix operators
  5. Pre-fix operators
  6. exponentiation
  7. multiplication / division 
    - multi-level => deep to superficial 
    - same level => left -> Right
  8. Addition/Subtraction
  9. bitwise shift
  10. relational operators (< , > , <=, >=)
  11. equality operators 
  12. bitwise AND
  13. bitwise XOR
  14. bitwise OR
  15. logical AND
  16. Logical OR/nullish coalescing 
  17. assignment and misc
  18. comma  
*/

let result = 4 * 5 + 3 ** 2 / 10; 
console.log(result); 
// exponentiation -> multiplication left -> division far right -> finally addition
  // 4 * 5 + 9/10 => 20 + 9/10 => 20 + 0.9 => returns 20.9


