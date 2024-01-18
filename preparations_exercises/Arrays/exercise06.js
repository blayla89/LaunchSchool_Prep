// 6. Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

function oddLengths(array) {
  let lengths = array.map(element => element.length); // returns an ARRAY of elements transformed to their corresponding length
  let oddLengths = lengths.filter(length => {         // filter the transformed length ARRAY to return an ARRAY of ONLY the odd lengths
    return length % 2 === 1; 
  })
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3];
