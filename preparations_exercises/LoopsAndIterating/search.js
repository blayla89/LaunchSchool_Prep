// version 1
let array = [3, 1, 5, 9, 2, 6, 4, 7]; 
let indexOfFive = -1; 

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = [i]
  }
}
console.log(indexOfFive); 

// version 2

let array2 = [3, 1, 5, 9, 2, 6, 4, 7]; 
let indexOfFive2 = -1; 

for (let i = 0; i < array.length; i += 1) {
  if (array2[i] === 5) {
    indexOfFive2 = [i]; 
    break; 
  }
}
console.log(indexOfFive2); 


// Whats the difference? => first keeps looping using CPU resources, second breaks once we find the element that matches the conditional expression