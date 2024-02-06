// 8. Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace.

/* ------------------------------------------------------------------
  Problem: 
    Input : String 
    Output: Boolean
    Details/rules : 
      - to be blank means = 
        1. the string only contains whitespace
             OR 
        2. the string is empty(length of zero)
        
  Examples: 
    isBlank('mars'); // false
    isBlank('  ');   // true
    isBlank('');     // true

  Data Structure: n/a 

  Algorithm: 
  1. remove the whitespace from the input string
  2. get the length of the string
  3. compare the length of the string to 0
  4. return the result of those operations
    - the returned value will be a boolean - true if its 'blank', false otherwise

  Code with Intent!

---------------------------------------------------------------------- */

function isBlank (string) {
  return string.trim().length === 0; 
}



console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true