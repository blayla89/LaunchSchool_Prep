// 7. Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);


// Expected output => False ------------------------------------------------
 // Why? - array equality means the array must point to the SAME location in memory. 
  // - Arrays store pointers in the variable and the actual array somewhere else in memory 
  // - in order to be equal, the variables would need to contain a reference(pointer) to the same array in memory - this is not the case here - these are two discrete arrays.