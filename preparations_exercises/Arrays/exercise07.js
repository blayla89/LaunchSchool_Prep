// 7. Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];

function sumOfSquares(array) {
  return array.reduce((accumulator, element) => {
    return accumulator += (element * element); 
  }); 
}

console.log(sumOfSquares(array)); // => 83


// NOTE: if you do not set an initial value, the element at index 0 is used and the iteration actually starts with the value at index 1!