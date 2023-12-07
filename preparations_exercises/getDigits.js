// 2. Using arithmetic operators, get the individual digits of a 4-digit number like 4936

// Steps: 
  // create variable to hold number and it's subsequent reassignments
  // create an empty array to store single digits
  // use remainder operator to get remainder = the single digit
  // push that result to the digits array as an element
  // update the number variable => subtract the remainder, then divide by 10 
  // repeat using the reaminder operator to get the single digit, pushing the result to the array, and updating the number value until no numbers are left 
    // for the last digit, just push the updated number because it already is a single digit when divided by 10 in the number update
    // reverse the order of array to display proper order

let digits = []; 
let number = 4936; 


let element = number % 10; 
digits.push(element); 
number = (number - element) / 10; 

element = number % 10; 
digits.push(element); 
number = (number - element) / 10; 

element = number % 10; 
digits.push(element); 
number =(number -element) / 10; 
digits.push(number); 

console.log(digits.reverse()); 

/* Book Solution: 
    > let number = 4936
    > let ones = number % 10
    > ones
    = 6

    > number = (number - ones) / 10
    = 493

    > let tens = number % 10
    > tens
    = 3

    > number = (number - tens) / 10
    = 49

    > let hundreds = number % 10
    > hundreds
    = 9

    > let thousands = (number - hundreds) / 10
    > thousands
    = 4
*/

