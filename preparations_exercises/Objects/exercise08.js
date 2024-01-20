// 8. Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

//The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

// Here are some examples for your reference:

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

// my solution
function copyObj(obj, keys){
  if(!keys) {
    return Object.assign({}, obj); 
  }
// create a new object with obj as prototype
 let newObj = Object.create(obj); 
// loop through the keys => add each key to new object with inherited value associated with the key
 keys.forEach(key => {
   newObj[key] = newObj[key];
 })
 return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

console.log(objToCopy)




function copyObjBookSolution(sourceObj, keys) {
  let destinationObj = {}; 
  /* no keys => undefined => false, keys, even if passed an empty array, => truthy */
  if(keys){ 
    keys.forEach(key => {
      /* loop through keys and add key to destiation object with the associated value of the source object - bracket required, */
      destinationObj[key] = sourceObj[key]; 
    }); 
    return destinationObject; 
  } else {
    return Object.assign(destinationObj, sourceObj)
  }
}