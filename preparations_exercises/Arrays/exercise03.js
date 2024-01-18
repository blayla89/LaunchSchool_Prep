// 3. Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

let myArray = [     // =>  multi-dimensional array
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];


// for loop 

for(let i = 0; i < myArray.length; i += 1){     //  => iterate through outer array => myArray[i] is an array
  for(let j = 0; j < myArray[i].length; j += 1) {  // => iterate through inner arrays => myArray[i][j] stored in value is an array element 
    if(myArray[i][j] % 2 === 0) {
      let value = myArray[i][j]
      console.log(value);              
    }
  }
}

// forEach() method
myArray.forEach(array => {
  array.forEach(element => {
    if(element % 2 === 0) {
      console.log(element)
    }
  })
})
