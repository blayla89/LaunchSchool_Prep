// 7. Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj); 

myObj.qux = 3; 

// Without running this code, can you determine whether these two snippets produce the same output? Why?


// iteration approach 1 : Object.keys()

// generate array of keys 
let objKeys = Object.keys(myObj); 

// iterate over array with built-in .forEach method
objKeys.forEach(function(key) {   
  console.log(key);               

});

// 'qux'

// iteration approach 2 : for/in loop 


for (let key in myObj) { 
  console.log(key);
}

// 'qux' 
// 'foo' 
// 'bar'

// Key difference = the handling of inherited properties
  // for/in :iterates over all the keys, including the prototype 
  // Object.key(): only iterates over the objects own properties - ignores its prototype's keys!