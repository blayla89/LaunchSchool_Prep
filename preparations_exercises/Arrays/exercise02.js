// 2. Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

// for loop
for(let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i]
  if(myArray[i] % 2 === 0) {
    console.log(myArray[i])
  }
}

// forEach() method
myArray.forEach(element => {
  if(element % 2 === 0) {
  console.log(element);
 }
})


