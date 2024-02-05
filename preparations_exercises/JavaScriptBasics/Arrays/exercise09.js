// The destinations array contains a list of travel destinations.

  /* 
    let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
    'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
    'Marrakesh', 'New York City'];
  */

// Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().


/* 
------------------------------------------------------------------------------------------------
  Problem: 
    Input: 
      1. String (representing a travel destination)
      2. Array (of strings representing travel destinations)
    Output: Boolean 
    Details/rules: 
      - cannot use .includes()
   
  Examples/Test Cases: 
    contains('Barcelona', destinations); // true
    contains('Nashville', destinations); // false

  Intermission: 'Barcelona' -> search the array 'Prague', 'London', 'Sydney', 'Belfast', 'Rome',
    'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
    'Marrakesh', 'New York City']; -> return true if found, false if not

  Algorithm: 
    1. declare variable result and init to false
    2. loop over the array of strings 
      - compare each element for equality against the string argument passed 
        -if found, update `result` to true 
        - if not found, `result` remains the same
    3. return `result`

    Code with Intent !
    
*/

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
'Marrakesh', 'New York City'];

function contains(city, destinations) {
  let result = false; 
  destinations.forEach(destination => {
    if(destination === city) {
      result = true; 
    }
  }); 
  return result; 
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false


///////////////////// BOOK SOLUTIONS //////////////////////////

// for loop 
function contains2(element, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true;
    }
  }

  return false;
}

// indexOf()
function contains3(element, list) {
  return list.indexOf(element) >= 0; // works because -1 returned if not found
}
