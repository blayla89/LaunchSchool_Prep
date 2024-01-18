// 5. Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.


/* Example Output: 

    let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
    let integers = findIntegers(things);
    console.log(integers); // => [1, 3, -4]

*/

 
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
  return array.filter(element => {
    return Number.isInteger(element); 
  });
}

console.log(findIntegers(things)); // => [1, 3, -4]
