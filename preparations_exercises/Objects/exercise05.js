// 5. Create a new object named myObj that uses myProtoObj as its prototype.


let myProtoObj = {
  foo: 1,
  bar: 2,
};

let newObject = Object.create(myProtoObj); // establishes parent-child relationship

newObject.qux = 3; 
console.log(newObject); 

console.log(newObject.foo); // => 1
console.log(newObject.bar); // => 2

