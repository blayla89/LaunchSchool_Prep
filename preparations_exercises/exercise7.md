### 7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:


```js
  let foo = ['a', 'b', 'c'];
  console.log(foo.length);  // => 3
  console.log(foo[3]);      // will this result in an error?
```

**Answer**: No, it will not raise an error. It will output `undefined`. If we try to access an index that is out-of-bounds, JS will return `undefined`. 
