// 5. Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

// forEach()---------------------------------------
function isAboveOneHundred (arr) {
  let count = 0; 
  arr.forEach(element => {
    if (element >= 100) {
      count += 1; 
    }
  })
  return count; 
}

console.log(isAboveOneHundred(scores)); // => 3


// for loop -----------------------------------------
function isAboveOneHundredAlt (arr) {
  let count = 0; 
  for(let i = 0; i < arr.length; i += 1 ) {
    if(arr[i] >= 100) {
      count += 1; 
    }
  }
  return count; 
}

console.log(isAboveOneHundredAlt(scores)); // => 3
