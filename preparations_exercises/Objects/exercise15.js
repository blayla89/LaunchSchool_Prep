// 15. Identify all of the variables, object property names, primitive values, and objects in the following code. This problem is even more challenging than the previous one.

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

// Variables: 
  // - bar, arg1, arg2
  // - foo
  // - qux
  // - result

// Object Property Names: 
  // - abc, def, ghi, jkl, mno, pqr
  // - 1, 2, 3, 4, 5, 6
  // - 0, 1, 2, 3 => indices of sub array property values
  // - 0 ,1, 2 => indice of sub array

// Primitives: 
  // - 'hello'
  // - abc, def, ghi, jkl, mno, pqr
  // - 0, 1, 2, 3 => indices of sub array property values
  // - 0 ,1, 2 => indice of sub array
  // - null 
  // - NaN
  // -'Victor', 'Antonia'

// Objects: 
  // - function bar(arg1, arg2) {let foo = 'Hello'; const qux = { abc: [1, 2, 3, [4, 5, 6]], def: null, ghi: NaN, jkl: foo, mno: arg1, pqr: arg2,};  return qux; }
  // - { abc: [1, 2, 3, [4, 5, 6]], def: null, ghi: NaN, jkl: foo, mno: arg1, pqr: arg2,}
  // - [1, 2, 3, [4, 5, 6]]
  // - [4, 5, 6]