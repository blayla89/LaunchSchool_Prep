// while loop to iterate
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];  // holds array of names to start
let upperNames = []; // variable to store the transformed names
let index = 0;  // init an index with 0 because arrays use 0-based index

while(index < names.length) {
  let upperCaseName = names[index].toUpperCase(); // transformed each name, one by one to uppercase and stores it in new temp variable
  upperNames.push(upperCaseName); // appends the value of the temp variable to upperNames array to store the newly transformed names in order that they are processed by the loop
  index += 1;  // increments the index => sets up condition for index to exceed the length of the array and become
}

console.log(upperNames); // [ 'CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR' ]

// for loop to iterate
let names2 = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']; 
let upperNames2 = []; 

for(let index = 0; index < names.length; index +=1) {
  let upperCasename = names[index].toUpperCase(); 
  upperNames2.push(upperCasename); 
}

console.log(upperNames2); 


// both = similar purpose, big difference = scope of the init clause!

// controlling loops 

  // using continue keywor
  

  let names3 = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']; 
  let upperNames3 = []; 

  for(let index = 0; index < names3.length; index += 1) {
    if(names3[index] === 'Naveed') {
      continue; 
    }
    // vvv alt syntax vvv
    // if(names3[index] === 'Naveed') continue; 
  
    let upperCaseName = names3[index].toUpperCase(); 
    upperNames3.push(upperCaseName); 
  }
  
  console.log(upperNames3)

  // alternative: a negated if statement
  let names4 = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']; 
  let upperNames4 = []; 

  for(let index = 0; index < names4.length; index += 1) {
    if(names4[index] !== 'Naveed') {
      let upperCaseName = names4[index].toUpperCase(); 
      upperNames4.push(upperCaseName); 
    }
  }

  console.log(upperNames4)