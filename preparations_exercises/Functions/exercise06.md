### 6. In the code shown below, identify the code components:



```js
  function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
  }

  let product = multiplyNumbers(2, 3, 4); 
```

| Program Components    | Part Identification                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| function arguments    | `2`, `3`, `4`                                                                                                                 |
| function body         | `{let result = num1 * num2 * num3; return result;}`                                                                           |
| function declaration  | `function multiplyNumbers(num1, num2, num3) {` <br> `let result = num1 * num2 * num3;`<br> `return result;` <br> `}`          |
| function invocation   | `multiplyNumbers()`                                                                                                           |
| function name         | `multiplyNumbers`                                                                                                             |
| function parameters   | `num1` `num2` `num3`                                                                                                          |
| function return value | the value of `product`: the evaluated expression on line 6 from the `return statement` inits the variable `product` on line 9 |
| all variable names    | `multiplyNumbers`, `num1`, `num2`, `num3`, `result`, `product`                                                                |
| local variables       | `num1` ,`num2`, `num3`, `result`                                                                                              |
| global variables      | `multiplyNumbers`, `product`                                                                                                  |
